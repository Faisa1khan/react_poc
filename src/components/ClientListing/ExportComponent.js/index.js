import React,{Context, createContext} from 'react';
import {  DropdownButton, Container, Col,Row } from 'react-bootstrap';
import {CSVLink} from 'react-csv'
import {connect} from 'react-redux'
import './styles.css'
import ExportModal from './ExportModal';
import { getFlattenedAO } from '../../../utils/genericUtils';
 



export const ExportContext=createContext()


 

function ExportComponent(props) {
    return(
        <ExportContext.Provider value={
            {
                filtered_data:getFlattenedAO(props.filtered_data),
                table_headers:['_id','name','status','location_id','gender','joining_date','year','tax_payed','CTC'],
                bulk_data:getFlattenedAO(props.bulk_data)
            }
        }>
            <ExportModal
            tabbed 
            tabs={[
                {name:'Excel',value:'excel'}
                ,{name:'ZIP',value:'zip'},
                {name:'CSV',value:'csv'}
            ]}
            btnText={'Export'}
                
         />
        </ExportContext.Provider>
    )    
}

const mapStateToProps=(store)=>{
    return{
        data:store.clientListing.data,
        filtered_data:store.clientListing.filtered_data,
        bulk_data:store.clientListing.data
    }
}

export default connect(mapStateToProps)(ExportComponent);