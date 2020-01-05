const _=require('lodash')
 
const data=[
    {
        "_id": "5e0d966cb16a025178c8f986",
        "name": "Mrckenzie",
        "status": true,
        "details": {
        "location_id": 2,
        "gender": "male",
        "joining_date": 1550994941153
        },
        "ctc": 1300218
        },
    {
    "_id": "5e0d966c6c77148f10cc2800",
    "name": "Grckam",
    "status": false,
    "details": {
    "location_id": 1,
    "gender": "female",
    "joining_date": 1569275938279
    },
    "ctc": 1171750
    },
    
    {
    "_id": "5e0d966cc732911c8c4005a2",
    "name": "Howell",
    "status": true,
    "details": {
    "location_id": 4,
    "gender": "male",
    "joining_date": 1488024141164
    },
    "ctc": 1479957
    }
]

//For selection box(1 level nesting)
    // const getAttributeSet=(data,attr)=>{
    //     let attributeSet=[]
    //     data.map((item)=>{
    //         attributeSet.push(item[attr])
    //     })
    //     return new Set(attributeSet)
    // }


//For multi-level nesting
    const getAttributeSet=(data,attr)=>{
        let attributeSet=[]
        data.map((item)=>{
            const value=_.get(item,attr.split('.'))
            if(value!==undefined && value!==null) attributeSet.push(value)
        })
        return Array.from(new Set(attributeSet))
        
    }

//For 1 -level nesting
    // const getKeywordSearchResult=(data,keyword,attr)=>{
    //     return data.filter((item)=>{return item[attr].includes(keyword)})
    // }

//For multilevel nesting
const getKeywordSearchResult=(current_data,default_data,keyword,attr)=>{
    
    // if() return default_data 
    if(keyword==null || keyword.length==0 || attr==null) return default_data
    return default_data.filter((item)=>{return (_.get(item,attr.split('.')).toLowerCase()).includes(keyword.toLowerCase())})
}

const sortByAttribute=(data,attr,asc)=>{
    if(data.length==0 || asc===null || attr===null) return data
    return [...data].sort((a,b)=>{ // Here a deep copy has been created for data otherwise it will get mutated
        if(asc===true)
            return _.get(a,attr.split('.'))-_.get(b,attr.split('.'))
        else if(asc===false)
            return _.get(b,attr.split('.'))-_.get(a,attr.split('.'))
         
    })
    
}

const getDataByAttributeValue=(data,attr,attrValue)=>{
    if(data.length==0 || attrValue===null || attr===null) return data
    return data.filter((item)=>{return _.get(item,attr.split('.'))==attrValue})
}

const getFilteredData=(current_data,default_data,filter)=>{
     
    
    let keywordData=getKeywordSearchResult(current_data,default_data,filter.keyword,'name')
    let attributeValueData=getDataByAttributeValue(keywordData,filter.attr.name,filter.attr.value)
    let sortedData=sortByAttribute(attributeValueData,filter.order.by,filter.order.mode)
        

    return sortedData
}

 





export {getAttributeSet,getFilteredData}












 


