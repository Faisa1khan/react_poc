import React, { useState, useEffect } from "react";
//import { usePrevious } from "../../components/customHooks";
import { connect } from "react-redux";

import Table from "../../components/Table";
import ReactPaginate from 'react-paginate';
import "./pagination.scss";
import Search from "../../components/Search";
import Filter from "../../components/Filter/Filter";
import { ResetBtn } from "../../components/commons";

import { listingActions } from "../../actions";
import { orderConstants } from "../../constants";

import { 
    getPaginatedItems
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

    // filters
    const [gender, setGender] = useState(undefined);
    const [genderActive, setGenderActive] = useState(false);
    const [status, setStatus] = useState(undefined);
    const [statusActive, setStatusActive] = useState(false);
    const [ctcOrder, setCtcOrder] = useState(undefined);  // for sort by ctc
    const [ctcOrderActive, setCtcOrderActive] = useState(false);
 
    const handleFiltersReset = () => {
        props.resetFilters();
        setGenderActive(false);
        setStatusActive(false);
        setCtcOrderActive(false);
    }

    //const prevFilters = usePrevious({gender, status, ctcOrder}); // custom hook
    useEffect(() => {  // have to use custom hook
        //if(prevFilters.gender !== gender)
            props.setPropertyFilter('gender', gender);
        //if(prevFilters.status !== status)
            props.setPropertyFilter('status', status);
        //if(prevFilters.ctcOrder !== ctcOrder)
            ctcOrder ? 
                props.setSortFilter('ctc', ctcOrder) :
                props.setSortFilter(undefined, undefined)
            ;
    }, [gender, status, ctcOrder]);

    // pagination
    const itemsPerPage = 5;
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(undefined);
    const [pageNumber, setPageNumber] = useState(0);  
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
        return (<div>Loading...</div>)
    
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
                <Filter 
                    filterName={'gender'}
                    options={['male', 'female']}
                    defaultOption={'female'}
                    setOption={setGender}
                    active={genderActive}
                    changeActive={setGenderActive}
                />
                <Filter 
                    filterName={'status'}
                    options={['true', 'false']}
                    defaultOption={'false'}
                    setOption={setStatus}
                    active={statusActive}
                    changeActive={setStatusActive}
                />
                <Filter
                    filterName={'sort by CTC'}
                    options={[orderConstants.ASC, orderConstants.DESC]}
                    defaultOption={orderConstants.ASC}
                    setOption={setCtcOrder}
                    active={ctcOrderActive}
                    changeActive={setCtcOrderActive}
                />
                <ResetBtn onClick={handleFiltersReset}/>
            </div>
            </div>
            <div className="listing-page__table">
                <Table 
                    data={getPaginatedItems(data.filtered, offset, itemsPerPage)}
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
    setSearchFilter: listingActions.setSearchFilter,
    setPropertyFilter: listingActions.setPropertyFilter,
    setSortFilter: listingActions.setSortFilter,
    resetFilters: listingActions.resetFilters
};
export default connect(mapState, mapActions)(ListingPage);