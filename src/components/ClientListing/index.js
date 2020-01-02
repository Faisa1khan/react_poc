import React,{useState, useEffect} from 'react';
import PaginationComponent from './PaginationComponent';
import {getPageCount,getPaginationContext} from '../../utils/PaginationUtil'
import ListingComponent from './ListingComponent';
import FilterComponent from './FilterComponent';
import { connect } from 'react-redux';
import {getData} from '../../actions';




const attrs=['_id','name','status','details','ctc']

function ClientListing(props) {
    
   
   useEffect(()=>{
    props.getData()
    
   },[])

    return(
      <div style={{padding:20}}>
       
        <FilterComponent defaultItemCount={props.itemsPerPage} /><br/>       
         <ListingComponent 
          attributes={attrs} 
          data={props.data}
          paginationContext={getPaginationContext(props.data.length,props.itemsPerPage,props.activePage)}
          
          /> 
         <span>
           
         </span>
         <br/><br/>
          
         <PaginationComponent
            pageCount={getPageCount(props.data.length,props.itemsPerPage)} 
              />
            

      </div>  
    )    
}

const mapStateToProps=(store)=>{
  return{
    data:store.clientListing.data,
    itemsPerPage:store.clientListing.itemsPerPage,
    activePage:store.clientListing.activePage
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getData:()=>{dispatch(getData())}
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ClientListing);