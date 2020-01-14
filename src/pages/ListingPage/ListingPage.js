import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Table from "../../components/Table";
import ReactPaginate from 'react-paginate';
import "./pagination.scss";
import Search from "../../components/Search";
import FilterBar from "./FilterBar";
import ExportBar from "./ExportBar";
import { Loader, Button } from "../../components/commons";

import { listingActions } from "../../actions";

import { 
    getPaginatedItems,
    history
} from "../../utils";


const ListingPage = (props) => {
    const { data, filters, flags } = props; 
    
    // get initial listings
    useEffect(() => {
        props.getInitialListing();
    }, [])

    // filter data
    useEffect(() => {
        if(data.all && data.all.constructor === Array && data.all.length>0 && filters){ 
            props.filterListing(data.all, filters);
        }
    }, [data.all, filters]);

    // search-bar
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
            props.setSearchFilter(searchText);
    }, [searchText])



    // pagination
    const itemsPerPage = 5;
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(undefined);
    const [pageNumber, setPageNumber] = useState(0);  
    const paginatedItems = getPaginatedItems(data.filtered, offset, itemsPerPage)
    const resetPaginationBar = () => {  // reset pagination bar
        setOffset(0);
        setPageNumber(0);
    }  
    useEffect(() => {
        if(data.filtered && data.filtered.constructor === Array){
            const newPageCount = Math.ceil(data.filtered.length / itemsPerPage);
            setPageCount(newPageCount);
            resetPaginationBar();
        } 
    }, [data.filtered])  

    const handlePageClick = ({selected}) => {  // change offset
        let newOffSet = Math.ceil(selected * itemsPerPage);
        setOffset(newOffSet);
        setPageNumber(selected);
    }

    // render
    if(flags.loading)
        return (<Loader/>);
    
    return (
        <div className="listing-page">
            <div className="d-flex">
                <div className="listing-page__searchbar">
                    <Search 
                        text={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                </div>
                <div className="listing-page__filters d-flex align-items-center">
                    <FilterBar />
                </div>
                <div className="listing-page__export ml-5 d-flex align-items-center">
                    <ExportBar 
                        bulkData={data.all}
                        data={paginatedItems}
                        />
                </div>
                <div className="listing-page_other ml-5 d-flex align-items-center">
                    <Button 
                        onClick={() => {history.push('/detail')}}
                        name={'detail'}
                        bootBtnClass={'btn-danger'}
                        />
                </div>
            </div>
            <div className="listing-page__table">
                <Table 
                    data={paginatedItems}
                /> 
            </div>
            <div className="listing-page__pagination">
                <ReactPaginate
                    previousLabel={'PREV'}
                    nextLabel={'NEXT'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    forcePage={pageNumber}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

const mapState = ({listing}) => ({
    data: listing.data,
    filters: listing.filters,
    flags: listing.flags
});
const mapActions = {
    getInitialListing: listingActions.getInitialListing,
    filterListing: listingActions.filterListing,
    setSearchFilter: listingActions.setSearchFilter
};

export default connect(mapState, mapActions)(ListingPage);