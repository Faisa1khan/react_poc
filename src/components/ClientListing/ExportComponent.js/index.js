import React from 'react';
import { Button, DropdownButton,Dropdown, Container, Col,Row } from 'react-bootstrap';
import {CSVLink} from 'react-csv'
import {connect} from 'react-redux'
import './styles.css'
 

function ExportComponent(props) {
    return(
        <Container>
            <Row>
                <Col lg={6}>
                <DropdownButton  title='Simple Export'>
                   <ul className="drop-down-list"> 
                    {
                        ['CSV','Excel','JSON'].map((type)=>{
                            return(
                           
                                <CSVLink key={type} data={props.filtered_data}>{type}</CSVLink>
                            
                            )
                        })
                    }
                    </ul>
                </DropdownButton>
            
                </Col>
                <Col lg={6}>
                <DropdownButton title='Bulk Export'>
                <ul  className="drop-down-list">
                {
                        ['CSV','Excel','JSON'].map((type)=>{
                            return(
                           
                               
                                <CSVLink key={type} data={props.filtered_data}>{type}</CSVLink>
                                
                            
                            )
                        })
                    }
                </ul>
                </DropdownButton>
                </Col>
            </Row>
        </Container>
    )    
}

const mapStateToProps=(store)=>{
    return{
        data:store.clientListing.data,
        filtered_data:store.clientListing.filtered_data
    }
}

export default connect(mapStateToProps)(ExportComponent);