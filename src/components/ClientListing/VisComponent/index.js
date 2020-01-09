import React, { useState } from 'react';
import {connect} from 'react-redux'
import { Container ,Col, Row,Button} from 'react-bootstrap';
import PieChart from '../../DataVis/PieChart'
import LineChart from '../../DataVis/LineChart'
import WordCloud from '../../DataVis/WordCloud'
import { getFormattedData } from '../../DataVis/visUtils';

 
function VisComponent(props) {
    const [type,setType]=useState('category')
    return(
       
            <Container fluid style={{marginTop:80}}>
               <Row >
                <Col lg={3}>
                        {
                            ['category','linear','wordcloud'].map((graph_type,index)=>{
                                return(
                                    <Row style={{margin:15}} key={index}>
                                        <Button onClick={()=>setType(graph_type)}>{graph_type}</Button>
                                    </Row>

                                )
                            })
                        }
                    </Col>
                    
                    <Col   lg={9}>
                        {
                            type==='category'?
                            <PieChart data={getFormattedData(props.filtered_data,'pie','details.gender')}/>
                            :type==='linear'?
                            <LineChart data={getFormattedData(props.filtered_data,'line','details.year','details.tax_payed')} />
                            :type==='wordcloud'?
                            <WordCloud data={getFormattedData(props.filtered_data,'wordcloud','details.location_id')}/>
                            :null
                            
                                                     
                        }
                    </Col>
               </Row>
            </Container>
    
    )
}

const mapStateToProps=(store)=>{
    return{
        filtered_data:store.clientListing.filtered_data
    }
}

export default connect(mapStateToProps)(VisComponent);