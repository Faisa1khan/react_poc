const _=require('lodash')

//Get list of a specific attribute 
const getAttributeList=(arr,attr)=>{
    let attr_list=[]
    arr.map((item)=>{
        attr_list.push(_.get(item,attr.split('.')))
    })
    return attr_list
}





//This will be used for word cloud
//Gets count of values for any level of nesting
//Also supports case_sensitivity true- case sensitive false- case insensitive
const getAttributeCount=(arr,attr,case_sensitive)=>{
    let attr_count={}
    arr.map((item)=>{
        let val=_.get(item,attr.split('.'))
         
        if(val)
        {
            if(case_sensitive && typeof(val)==='string') val=val.toLowerCase()            
            
            if(attr_count[val]==undefined) attr_count[val]=1
            else attr_count[val]+=1
        }
        else{
            if(attr_count['Others']==undefined)
            {
                attr_count['Others']=1
            }
            else
            {
                attr_count['Others']+=1
            }
        }
         
    })
    return attr_count
}

const data=[
    {
        a:2,b:3
    },
    {
        a:5,b:2
    }
]


//Get specific attributes based on some callback 
const getAttributeListMod=(arr,attr,callback)=>{
    let arr_list=[]
    arr.map((item)=>{
        let val=callback(item,attr)
        if(val)
        {
            arr_list.push(val)
        }
    })
    return arr_list
}
const getMaxAttributeValue=(data,attr)=>{
    let max_val=-Number.MAX_VALUE
    data.map((item)=>{
        if(item[attr]>max_val) max_val=item[attr]
    })
    return max_val
}

const getMinAttributeValue=(data,attr)=>{
    let min_val=Number.MAX_VALUE
    data.map((item)=>{
        if(item[attr]<min_val) min_val=item[attr]
    })
    return min_val
}


//Works for object only 
const getFlattenedData=(data,newData)=>{
  
    
     
    Object.keys(data).map((key)=>{
        if(typeof(data[key])=='object' && data[key].length==undefined){
            getFlattenedData(data[key],newData)
        }
        else if(typeof(data[key])=='object' && data[key].length!==undefined)
        {
           newData[key]=data[key].length
        }
        else
        {
            newData[key]=data[key]
        }
         
    })
}

 

module.exports={getFlattenedData,getAttributeCount,getAttributeList,getAttributeListMod,getMaxAttributeValue,getMinAttributeValue}