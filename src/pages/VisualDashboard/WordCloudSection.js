import React, { useState, useEffect } from "react";
import { WordCloud } from "../../components/charts";
import { genTagIDForChart } from "../../utils";

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
const transformForWordCloud = (obj) => {
    const res = [];
    for(const key of Object.keys(obj)){
        const item = {
            name: key,
            weight: obj[key]
        }
        res.push(item);
    }
    return res;
}

export default function WordCloudSection(props){
    const [seriesData, setSeriesData] = useState([{
        name: 'John',
        weight: 3
    }, {
        name: 'Raun',
        weight: 1
    }, {
        name: 'Dolor',
        weight: 6
    }]);
    //console.log(props.data);

    useEffect(() => {
        if(!props.data)
            return;
        const { country: countryFreq } = getFrequency(props.data, 'country');
        const result = transformForWordCloud(countryFreq);
        setSeriesData(result);
    }, [props.data]);

    return(
        <div className="word-cloud" style={{maxWidth: '800px'}}>
            
            {seriesData && (
                <WordCloud
                    divID={genTagIDForChart()}
                    title={'No of employees from countries'} 
                    name={'occurences of employees in country'}
                    seriesData={seriesData}
                />
            )}
        </div>
        );
};