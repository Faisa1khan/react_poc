import React, { useState, useEffect } from "react";
import { BarChart } from "../../components/charts";
import { genTagIDForChart } from "../../utils";

const getCTCByProperty = (employees, property) => {
    if(!employees)
        return Promise.reject('employees cannot be undefined');
    if(!property)
        return Promise.reject('property cannot be undefined');
    const res = {};
    employees.forEach(emp => {
        const propertyValue = emp[property];
        const ctc = emp['ctc'];
        if(res[propertyValue])
            res[propertyValue] += ctc;
        else 
            res[propertyValue] = ctc;  
    });
    return res;
} 
const convertIntoSeriesData = (map) => {
    //console.log(map);
    let res = [];
    for(let key of Object.keys(map)){
        res.push([key, map[key]]);
    }
    return res;
}

export default function BarSection(props){
    const [seriresData, setSeriesData] = useState(undefined);
    const [xAxis, setXAxis] = useState({});
    const [yAxis, setYAxis] = useState({});

    useEffect(() => {
        if(!props.data)
            return;
        const map = getCTCByProperty(props.data, 'country');
        setXAxis({
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        });
        setYAxis({
            min: 0,
            title: {
                text: 'ctc (lakhs)'
            }
        });
        const seriesData = convertIntoSeriesData(map);
        setSeriesData(seriesData);
        
    }, [props.data])

    return(
        <div className="bar-chart" style={{maxWidth: '800px'}}>
            {seriresData && (
                <BarChart
                    divID={genTagIDForChart()}
                    title={'ctc of employees by location'}
                    xAxis={xAxis}
                    yAxis={yAxis}
                    seriesData={[{
                        name: 'ctc',
                        data: seriresData,
                        dataLabels: {
                            enabled: true,
                            rotation: -90,
                            color: '#FFFFFF',
                            align: 'right',
                            format: '{point.y:.1f}', // one decimal
                            y: 10, // 10 pixels down from the top
                            style: {
                                fontSize: '13px',
                                fontFamily: 'Verdana, sans-serif'
                            }
                        }
                    }]}  
                />
            )}
        </div>
    );
};