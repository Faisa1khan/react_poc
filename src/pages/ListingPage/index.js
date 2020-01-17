import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { ListingTable } from "../../components/_Table";
import ReactPaginate from 'react-paginate';
import "./pagination.scss";
import Search from "../../components/Search";
import FilterBar from "./FilterBar";
import ExportBar from "./ExportBar";
import ZipAll from "./ZipAll";
import { Loader, Button } from "../../components/commons";
import { ViewModal } from "../../components/Modals";

import { listingActions } from "../../actions";

import { 
    getPaginatedItems,
    history
} from "../../utils";

import { useDebounce } from "../../components/customHooks";

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
    const debouncedTxt = useDebounce(searchText, 400);
    
    useEffect(() => {
            props.setSearchFilter(searchText);
    }, [debouncedTxt])


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

    // view modal
    const [modalData, setModalData] = useState({});
    useEffect(() => {
        if(!props.modal.identifier)
            return;
        const { identifier } = props.modal;
        console.log('here', identifier);
        const key = Object.keys(identifier)[0];
        console.log('key', key)
        console.log('data', data.all)
        const item = data.all.find(item => item['_id']===identifier[key]);
        console.log(item);
        setModalData(item.details);
    }, [props.modal])
    


    // render
    if(flags.loading)
        return (<Loader/>);
    
    return (
        <div className="listing-page">
            <ViewModal 
                id='view-modal' 
                data={modalData}
            />
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
                    <ZipAll />
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
                <ListingTable 
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
    flags: listing.flags,
    modal: listing.modal
});
const mapActions = {
    getInitialListing: listingActions.getInitialListing,
    filterListing: listingActions.filterListing,
    setSearchFilter: listingActions.setSearchFilter
};

const con = connect(mapState, mapActions)(ListingPage);
export { con as ListingPage };