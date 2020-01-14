import React,{useState, useEffect} from 'react';
import PaginationComponent from './PaginationComponent';
import {getPageCount,getPaginationContext} from '../../utils/PaginationUtil'
import ListingComponent from './ListingComponent';
import FilterComponent from './FilterComponent';
import { connect } from 'react-redux';
import {getData, setMode} from '../../actions';
import {get} from 'lodash'
import { Container,Row,Col, Spinner, Jumbotron, Button } from 'react-bootstrap';
import ExportComponent from './ExportComponent.js';
import VisComponent from './VisComponent';
import ReportComponent from '../ReportComponent';




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
                 
                <ExportComponent 
                   headers={attrs}
                   data={props.filtered_data}
                   
                />
                
              </Col>
           
           
            </Row>
            
        </Container>
        <br/>  
        <div>
          {`Search returned ${props.filtered_data.length} results`}
          <span style={{float:'right'}}>
            <Button onClick={(e)=>props.setMode('list')} variant={props.mode=='list'?'danger':'primary'}>List</Button>
            <Button onClick={(e)=>props.setMode('graph')} variant={props.mode=='graph'?'danger':'primary'} >Graph</Button>
            <Button onClick={(e)=>props.setMode('report')} variant={props.mode=='report'?'danger':'primary'} >Report</Button>
          </span>
        </div>     
         {props.data.length==0?
         <center>
           <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
          </Spinner>
         </center>
         :props.mode==='list'?
         <div>
           <ListingComponent 
            attributes={attrs} 
             
            filtered_data={props.filtered_data}  
            paginationContext={getPaginationContext(props.filtered_data.length,props.itemsPerPage,props.activePage)}
            
          />
          <center><PaginationComponent pageCount={getPageCount(props.filtered_data.length,props.itemsPerPage)} /> </center>
            
         </div>
            :props.mode==='graph'?
          <VisComponent /> 
          :props.mode=='report'?
          <ReportComponent />
          :
          null
          }
          
          
         
           
      </div>  
    )    
}

const mapStateToProps=(store)=>{
  return{
    data:store.clientListing.data,
    itemsPerPage:store.clientListing.itemsPerPage,
    activePage:store.clientListing.activePage,
    filtered_data:store.clientListing.filtered_data,
    mode:store.clientListing.mode
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getData:()=>{dispatch(getData())},
    setMode:(mode)=>dispatch(setMode(mode))
  }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(ClientListing);