import React, { useEffect } from "react";
import Highcharts from "highcharts";

export function PiChart({divID, title, category, data}){ // divID unique
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
                data: data
            }]
        });
    }, [data]);

    if(!divID)
        return (<div></div>);

    return (
        <div className="pi-chart" id={divID}>
        </div>
    );
}