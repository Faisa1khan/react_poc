import React from 'react';
import ReactPagination from 'react-paginate'
import './styles.css'
import { setActivePage } from '../../../actions';
import { connect } from 'react-redux';



function PaginationComponent(props) {

    

    return( 
        <ReactPagination 
            pageClassName={'page-list-item'} 
            previousClassName={'page-list-handles'}
            nextClassName={'page-list-handles'}
            breakClassName={'page-list-item'} 
            pageCount={props.pageCount}
             
            onPageChange={(pgNo)=>props.setActivePage(pgNo.selected+1)}
            activeClassName={'page-list-item active'}
            forcePage={props.activePage-1}
        />
    )

}

const mapStateToProps=(store)=>{
    return{
        activePage:store.clientListing.activePage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setActivePage:(page)=>dispatch(setActivePage(page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaginationComponent);