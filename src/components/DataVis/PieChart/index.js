import React, { useEffect } from 'react';
import Highcharts from 'highcharts'


function PieChart({title,data,xTitle,yTitle,seriesName}) {
    
    useEffect(()=>{
        
            Highcharts.chart('container',{
                chart:{
                    type:'pie'
                },

                title:{
                    text:title,
                },
                
                xAxis:{
                    title:xTitle,
                    categories:['dsfds','vsefd']
                },
                yAxis:{
                    title:yTitle
                },
                series:[{
                    name:seriesName,
                    data:Object.keys(data).map((key)=>{return {name:key,y:data[key]}})
                }]
            })
    },[data])

    return(
        <div id='container' />
    )
}

export default PieChart;