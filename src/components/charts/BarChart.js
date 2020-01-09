import React, { useEffect } from "react";
import Highcharts from "highcharts";

// id, title, x-axis categories, data=seriesData
export function BarChart({divID, title, xAxis, yAxis, seriesData}){ // divID unique
    useEffect(() => {
        if(!seriesData)
            return;
        console.log(xAxis, yAxis, seriesData);
        Highcharts.chart(divID, {
            chart: {
                type: 'column'
            },
            title: {
                text: title
            },
            xAxis: xAxis,
            legend: {
                enabled: false
            },
            yAxis: yAxis,
            
            series: seriesData
        });
        
    }, [seriesData]);

    if(!divID)
        return (<div></div>);

    return (
        <div className="bar-chart" id={divID}>
        </div>
    );
}
