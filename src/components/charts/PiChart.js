import React, { useEffect } from "react";
import Highcharts from "highcharts";

export function PiChart({divID, title, category, seriesData}){ // divID unique
    useEffect(() => {
        Highcharts.chart(divID, {
            chart: {
                type: 'pie'
            },
            title: {
                text: title
            },
            series: [{
                name: category,
                data: seriesData
            }]
        });
    }, [seriesData]);

    if(!divID)
        return (<div></div>);

    return (
        <div className="pi-chart" id={divID}>
        </div>
    );
}