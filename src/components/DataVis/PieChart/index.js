import React, { useEffect } from 'react';
import Highcharts from 'highcharts'


function PieChart({title,data,xTitle,yTitle}) {
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
                    
                    data:Object.values(data)
                }]
            })
    },[data])

    return(
        <div id='container' />
    )
}

export default PieChart;