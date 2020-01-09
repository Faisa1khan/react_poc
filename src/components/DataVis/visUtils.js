import { getAttributeCount, getAttributeList, getAttributeListMod, getMaxAttributeValue,getMinAttributeValue } from "../../utils/genericUtils"
import _ from 'lodash'

export const getFormattedData=(data,type,xAttr,yAttr,callback)=>{
    switch(type){
        case 'pie':
        case 'wordcloud': return getCategoricalData(data,xAttr)
        case 'bar':
        case 'line':
        case 'spline':return getLinearData(data,xAttr,yAttr,callback)
    }
}

 
//Pie chart and Word Cloud
const getCategoricalData=(data,category)=>{
       return getAttributeCount(data,category,true)
}

// Bar chart, LineChart, Spline Chart
const getLinearData=(data,xAttr,yAttr,callback)=>{
    let bar_data_preSort={}
    data.map((item)=>{
        let xAttrValue=_.get(item,xAttr.split('.'))
        let yAttrValue=isNaN(_.get(item,yAttr.split('.')))?0:Number(_.get(item,yAttr.split('.'))) //This check is done so that undefined values or non number strings return 0
        if(bar_data_preSort[xAttrValue]===undefined)
        {
            bar_data_preSort[xAttrValue]=callback?callback(yAttrValue):yAttrValue
        }
        else
        {   //Modify callback to take new and previous value and current value and perform any sort of operation
            //Here it is adding by default summing values of yAttr for same xAttr value
            //Consider this callback to be a sort of aggregation function
            bar_data_preSort[xAttrValue]+=callback?callback(yAttrValue):yAttrValue
        }
    })
    //Assuming object keys are Number
    let bar_data={}
    //Sorting based on xAttr
    Object.keys({...bar_data_preSort}).sort().map((key)=>{
        bar_data[key]=bar_data_preSort[key]
    })
    return bar_data
}



const isEven=(item,attr)=>{
    if(item[attr]%2==0)
    {
        return item[attr]
    }
    return null
}

const isOdd=(item,attr)=> {
    if(item[attr]%2!==0)
    {
        return item[attr]
    }
    return null
}

 
const getNormalized=(item,attr,...args)=>{
    //args[0] is the max value in data
    return (item[attr]/args[0])*100
}
 