import React from 'react';
import SplineChart from './SplineChart';
import {Container,Col,Row} from 'react-bootstrap'
import BarChart from './BarChart';
import WordCloud from './WordCloud';
import PieChart from './PieChart';
import LineChart from './LineChart';
import {getFormattedData} from './visUtils'

const test_data=[
  {name:'Anish',b:2,gender:'male',year:2006,tax_payed:11000},
  {name:'Anish',b:6,gender:'Male',year:2010,tax_payed:25000},
  {name:'bwtbre',b:3,gender:'Female',year:2009,tax_payed:15000},
  {name:'sdbdbf',b:6,gender:'Male',year:2008,tax_payed:25000},
  {name:'dsfs',b:2,gender:'male',year:2006,tax_payed:21000},
  {name:'sdbdbf',b:6,gender:'Male',year:2008,tax_payed:25000},
  {name:'bwtbre',b:3,gender:'Female',year:2010,tax_payed:15000},
  {name:'sdbdbf',b:6,gender:'Male',year:2007,tax_payed:25000}
]


function DataVis() {
     
  
    return(
      <Container>
        <Row>
          <Col>
          <SplineChart 
            data={getFormattedData(test_data,'spline','year','tax_payed')}              
            title='Spline Chart Demo'
            xTitle='Year'
            yTitle='Tax Payed'
            seriesName='Tax Payed'
             
           />
          </Col>
          <Col>
            <BarChart 
            title='Bar chart demo'
            xTitle='Year'
            yTitle='Tax Payed'
            data={getFormattedData(test_data,'bar','year','tax_payed')}
            seriesName='Tax Payed'
             
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PieChart 
            title='Pie chart demo'
            data={getFormattedData(test_data,'pie','name')} />
          </Col>
          <Col>
            <LineChart title='Line chart demo'
            xTitle='Year'
            yTitle='Tax Payed'
            seriesName='Tax Payed'
           data={getFormattedData(test_data,'line','year','tax_payed')} />
          </Col>
        </Row>
        <Row>
          <Col>
            <WordCloud 
            title='Word Cloud Demo'
            data={getFormattedData(test_data,'wordcloud','name')} />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
          
            
        
    )
}

export default DataVis;