import React from 'react';
import {  DropdownButton, Container, Col,Row } from 'react-bootstrap';
import {CSVLink} from 'react-csv'
import {connect} from 'react-redux'
import './styles.css'
 
const headers=[
    {
        label:'ID',key:'_id'
    },
    {
        label:'Name',key:'name'
    },
    {
        label:'Status',key:'status'
    },
    {
        label:'Location Id',key:'details.location_id'
    },
    {
        label:'Gender',key:'details.gender'
    },
    {
        label:'Joining Date',key:'details.joining_date'
    },
    {
        label:'CTC',key:'ctc'
    }

]

function ExportComponent(props) {
    return(
        <Container>
            <Row>
                <Col lg={6}>
                <DropdownButton  title='Simple Export'>
                   <ul className="drop-down-list"> 
                    {
                        ['CSV','JSON'].map((type)=>{
                            return(
                           
                                <CSVLink headers={headers} key={type} data={props.filtered_data}>{type}</CSVLink>
                            
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
                        ['CSV','JSON'].map((type)=>{
                            return(
                           
                               
                                <CSVLink headers={headers} key={type} data={props.data}>{type}</CSVLink>
                                
                            
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