import React,{ useEffect } from "react";
import HighCharts from "highcharts";
require("highcharts/modules/wordcloud")(HighCharts);


export function WordCloud({divID, seriesData, name, title}){
    useEffect(() => {
        if(!seriesData)
            return;
        HighCharts.chart(divID, {
            title: {
                text: title
            },
            series: [{
                type: 'wordcloud',
                data: seriesData,
                name: name,
            }]
        });
    }, [seriesData]);
    return (
        <div id={divID}>
        </div>
    );
}