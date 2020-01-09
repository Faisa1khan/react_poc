import React, { useState, useEffect, Fragment } from "react";
import { PiChart } from "../../components/charts"; 
import { genTagIDForChart } from "../../utils";

// takes array of data & returns percentages of a sepecif property
const getFrequency = (items, property) => {
    if(!items[0][property])
        return Promise.reject('property does not exist');
    const frequency = {};
    //console.log(items[0][property]);
    items.forEach(item => {
        if(frequency[item[property]])
            frequency[item[property]] += 1;
        else    
            frequency[item[property]] = 1;
    })
    //console.log('fre', frequency);
    return {
        [property]: frequency,
        total: items.length
    };
};

const normalizeFrequencyBy100 = (frequency, total) => {
    const normalized = {...frequency};
    for(let key of Object.keys(normalized)) {
        normalized[key] = (normalized[key] / total) * 100;
    }   
    return normalized;
}

export default function PiSection(props){  // set once initially
    const [seriesData, setSeriesData] = useState(undefined);

    // categorize by
    const [category, setCategory] = useState('country');
    useEffect(() => {
        console.log('cat', category)
        if(!props.data)
            return;
        const frequency = getFrequency(props.data, category);
        const res = normalizeFrequencyBy100(frequency[category], frequency.total);
        const seriesData = Object.keys(res).map(key => {
            return {
                name: key,
                y: res[key]
            }
        });
        setSeriesData(seriesData);
    }, [category, props.data]);

    return(
        <Fragment>
        <div className="categorize-by">
            <label>Categorize By</label>
            <select value={category} onChange={(e) => {setCategory(e.target.value)}}>
                <option value={'country'}>Location</option>
                <option value={'gender'}>Gender</option>
            </select>
        </div>
        <div className="pi-chart">
            {seriesData && category==='country' && (
                <PiChart 
                    divID={genTagIDForChart()}
                    title={'Employees by location'}
                    category={category}
                    seriesData={seriesData}
                />)}
            {seriesData && category==='gender' && (
                <PiChart 
                    divID={genTagIDForChart()}
                    title={'Employees by Gender'}
                    category={category}
                    seriesData={seriesData}
                />)}
        </div>
        </Fragment>
    );
}



