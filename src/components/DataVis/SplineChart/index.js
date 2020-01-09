import React, { useEffect } from 'react';
import HighCharts from 'highcharts'
import { getFormattedData } from '../visUtils';


function SplineChart({data,title,xTitle,yTitle,seriesName}) {

    useEffect(()=>{
        HighCharts.chart('container-spline',{
            
            chart:{
                type:'spline'
            },
            title:{
                text:title
            },
            xAxis:{
                 title:{
                     text:xTitle
                 },
                categories:Object.keys(data) //getXCategories
            },
            yAxis:{
                title:{
                    text:yTitle
                }
            },
            series:[
                {
                    name:seriesName,             
                    data:Object.values(data)
                } 
            ]
        })
    },[data])
     
    return(
        
        <div id='container-spline' />
    )
}

export default SplineChart;