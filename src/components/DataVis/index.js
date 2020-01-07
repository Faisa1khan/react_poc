import React from 'react';
import SplineChart from './SplineChart';
import {Container,Col,Row} from 'react-bootstrap'
import BarChart from './BarChart';
import WordCloud from './WordCloud';
import PieChart from './PieChart';
import LineChart from './LineChart';
import {getCategoricalData,getLinearData} from './visUtils'

const main_data=[{a:'dsfs',b:2,gender:'male',ctc:1100000},{a:'sdbdbf',b:6,gender:'Male',ctc:2500000},{a:'bwtbre',b:3,gender:'Female',ctc:1500000}]


function DataVis() {
     
  
    return(
      <Container>
        <Row>
          <Col>
          <SplineChart 
            data={{'sevfsd':1,'vsfdvsf':4,'betrer':2,'vuntgr':3,'ertwvrt':7}}  
             
            title='Spline Chart Demo'
            xTitle='Names'
            yTitle='CTC'
             
           />
          </Col>
          <Col>
            <BarChart 
            title='Bar chart demo'
            xTitle='Names'
            yTitle='CTC'
            data={getLinearData(main_data,'ctc',(item,attr)=>{return item[attr]>100000})}    
             
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PieChart 
            title='Pie chart demo'
            data={getCategoricalData(main_data,'gender')} />
          </Col>
          <Col>
            <LineChart title='Line chart demo'
            data={{'sevfsd':1,'vsfdvsf':4,'betrer':2,'vuntgr':3,'ertwvrt':7}}/>
          </Col>
        </Row>
      </Container>
          
            
        
    )
}

export default DataVis;