import React,{useState, useEffect} from 'react';
import PaginationComponent from './PaginationComponent';
import {getPageCount,getPaginationContext} from '../../utils/PaginationUtil'
import ListingComponent from './ListingComponent';
import FilterComponent from './FilterComponent';
import { connect } from 'react-redux';
import {getData} from '../../actions';
import {get} from 'lodash'
import { Container,Row,Col, Spinner, Jumbotron } from 'react-bootstrap';
import ExportComponent from './ExportComponent.js';




const attrs=['_id','name','status','details','ctc']

function ClientListing(props) {
    
   
   useEffect(()=>{
    props.getData()
     
   },[])

    return(
      <div style={{padding:10}}>
       
        <Container fluid>
           
             
            <Row>
              <Col sm={9}>
                 
                  <FilterComponent defaultItemCount={props.itemsPerPage} />
                
              </Col>
              <Col sm={3}>
                 
                <ExportComponent />
                
              </Col>
           
           
            </Row>
            
        </Container>
        <br/>  
        <b>{`Search returned ${props.filtered_data.length} results`}</b>     
         {props.data.length==0?
         <center>
           <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
          </Spinner>
         </center>
         :
           <ListingComponent 
          attributes={attrs} 
          filter={{order:{by:'ctc',mode:false}}}
          filtered_data={props.filtered_data}  
          paginationContext={getPaginationContext(props.filtered_data.length,props.itemsPerPage,props.activePage)}
          
          /> 
          }
         <span>
           
         </span>
         <br/><br/>
          
         <center><PaginationComponent pageCount={getPageCount(props.filtered_data.length,props.itemsPerPage)} /> </center>
            

      </div>  
    )    
}

const mapStateToProps=(store)=>{
  return{
    data:store.clientListing.data,
    itemsPerPage:store.clientListing.itemsPerPage,
    activePage:store.clientListing.activePage,
    filtered_data:store.clientListing.filtered_data
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getData:()=>{dispatch(getData())}
  }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(ClientListing);