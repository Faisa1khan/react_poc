import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Table from "../Table";
import ReactPaginate from 'react-paginate';
import "./pagination.scss";

import { listingActions } from "../../actions";

const getPaginatedItems = (items, offset, limit) => {
    return items.slice(offset, offset+limit);
}

const ListingPage = (props) => {
    const { loading, data } = props.listing;
    
    const itemsPerPage = 5;
    const pageCount = data ? Math.ceil(data.length/itemsPerPage) : 10;
    const [offset, changeOffset] = useState(0);
    
    useEffect(() => {
        props.getInitialListing();
    }, [])

    const handlePageClick = ({selected}) => {
        let offset = Math.ceil(selected * itemsPerPage);
        changeOffset(offset);
    }
    
    if(loading)
        return (<div>Loading...</div>)

    return (
        <div className="listing-page">
            <div className="listing-page__table">
                <Table 
                    data={getPaginatedItems(data, offset, itemsPerPage)}
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
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    )
}

const mapState = state => ({
    listing: state.listing || {}
})
const mapActions = {
    getInitialListing: listingActions.getInitialListing
}
export default connect(mapState, mapActions)(ListingPage);