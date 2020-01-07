const { getAttributeCount, getAttributeList, getAttributeListMod, getMaxAttributeValue,getMinAttributeValue } =require("../../utils/genericUtils")


export const getFormattedData=(data,type,attribute)=>{
    switch(type){
        case 'pie':
        case 'wordcloud': return getCategoricalData(data,attribute)
        case 'bar':return 
    }
}

const data=[{a:'dsfs',b:2,gender:'male',ctc:1100000},{a:'sdbdbf',b:6,gender:'Male',ctc:2500000},{a:'bwtbre',b:3,gender:'Female',ctc:1500000}]

//Pie chart and Word Cloud
export const getCategoricalData=(data,category)=>{
       return getAttributeCount(data,category,true)
}

//Bar chart, LineChart, Spline Chart
export const getLinearData=(data,attr,callback)=>{
    return getAttributeListMod(data,attr,callback)
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
 