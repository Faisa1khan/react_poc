import React, { useEffect } from 'react';
import Highcharts from 'highcharts'

function BarChart({data,title,xTitle,yTitle}) {
    useEffect(()=>{
        Highcharts.chart('container-bar',{
            chart:{
                type:'bar'
            },
            title:{
                text:title
            },
            xAxis:{
                 title:{
                     text:xTitle
                 },
                categories:Object.keys(data)  
            },
            yAxis:{
                title:
                {
                    text:yTitle
            }},
            series:[{
                data:Object.values(data) 
            }]
        })
    },[data])
    return(
        <div id='container-bar' />
    )
}

export default BarChart;