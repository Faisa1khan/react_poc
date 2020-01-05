import React, { useMemo,useState, useEffect} from 'react';
import { DropdownButton, Dropdown,   FormControl, Container, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { setItemsPerPage,setFilteredData } from '../../../actions'
import {getAttributeSet} from '../../../utils/FilterUtil'

function FilterComponent(props) {
    const [filter,setFilter]=useState({
        order:{ //sortByAttribute(props.data,props.filter.order.by,props.filter.order.mode)
            by:null,
            mode:null
        },
        keyword:'',//getKeywordSearchResult(props.data,props.keyword,attributeName)
        attr:{     
            name:null,
            value:null
        }
    })

    

    const logFilter=()=>{
        console.log(filter)
    }

    useEffect(()=>{
        logFilter()
        props.setFilteredData(props.filtered_data,props.data,filter)
    },[filter]) 

    const setOrder=(attr,mode)=>{
        setFilter({...filter,order:{...filter.order,by:attr,mode:mode}})
    }

    const setAttrValue=(name,value)=>{
        setFilter({...filter,attr:{...filter.attr,name:name,value:value}})
    }

    const reset=()=>{
        setFilter({...filter,keyword:null,attr:{...filter.attr,name:null,value:null},order:{...filter.order,by:null,mode:null}})
        
    }

    

    return (
        <Container fluid>
             
            <Row >
                <Col lg={4} >
                   
                        <FormControl placeholder='Enter keyword' value={filter.keyword===null?'':filter.keyword} onChange={(e)=>setFilter({...filter,keyword:e.target.value})}/>
                         
                    
                </Col>
                
                <Col lg={1}>
                      <DropdownButton title='Location'>
                        {
                            getAttributeSet(props.data,'details.location_id').map((location)=>{
                                return(
                                    <Dropdown.Item onClick={()=>setAttrValue('details.location_id',location)} key={location}>{location}</Dropdown.Item>
                                )
                            })
                        }
                      </DropdownButton>  
                </Col>
                <Col lg={1}>
                      <DropdownButton title='Gender'>
                      {
                            getAttributeSet(props.data,'details.gender').map((gender)=>{
                                return(
                                    <Dropdown.Item onClick={()=>setAttrValue('details.gender',gender)} key={gender}>{gender}</Dropdown.Item>
                                )
                            })
                        }
                      </DropdownButton>  
                </Col>
                <Col lg={1}>
                        <DropdownButton title='Sort'>
                        <Dropdown.Item onClick={()=>setOrder('ctc',true)}>Sort by CTC (low to high)</Dropdown.Item>
                            <Dropdown.Item onClick={()=>setOrder('ctc',false)} >Sort by CTC (high to low)</Dropdown.Item>
                            
                        </DropdownButton>
                </Col>
                {/* <Col lg={2}>
                       Joining Date 
                </Col>
                <Col>
                    Range of CTC
                </Col> */}
                
                <Col lg={2}>
                    {/*Change items per page*/}
                    <DropdownButton title={`Items per page(${props.itemsPerPage})`}>
                        {
                            [5, 10, 15, 20].map((value) => {
                                return (
                                    <Dropdown.Item 
                                    active={value == props.itemsPerPage} 
                                    key={value} 
                                    onClick={() => props.setItemsPerPage(value)}>{value}</Dropdown.Item>
                                )
                            })
                        }
                    </DropdownButton>
                </Col>
                <Col lg={3}>
                        <Button variant='danger' onClick={reset}>Reset</Button>
                </Col>
                
            </Row>
           
        </Container>
    )
}

const mapStateToProps = (store) => {
    return {
        itemsPerPage: store.clientListing.itemsPerPage,
        filtered_data:store.clientListing.filtered_data,
        data:store.clientListing.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItemsPerPage: (itemsPerPage) => dispatch(setItemsPerPage(itemsPerPage)),
        setFilteredData:(current_data,default_data,filter)=>dispatch(setFilteredData(current_data,default_data,filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);