import React, { useEffect } from 'react';
import Highcharts from 'highcharts'
require('highcharts/modules/wordcloud')(Highcharts)


function WordCloud({data,title}) {
    useEffect(()=>{
         
        Highcharts.chart('container-word-cloud', {
            series: [{
                type: 'wordcloud',
                data: Object.keys(data).map((key)=>{return {name:key,weight:data[key]}}),
                name: 'Frequency'
            }],
            title: {
                text: title
            }
        }); 
        
        
    },[data])
    return(
        <div id='container-word-cloud'>
               
        </div>
    )
}

export default WordCloud;