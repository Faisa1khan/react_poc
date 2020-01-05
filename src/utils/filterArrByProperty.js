
export function filterArrByProperty(items, property, propertyValue){
    if(!items)
        return Promise.reject('items cannot be undefined');
    if(items.constructor !== Array) 
        return Promise.reject('items must be Array');
    if(items.length < 1)
        return items;
    if(!property)
        return Promise.reject('property cannot be undefiend');
    if(typeof property !== 'string')
        return Promise.reject('property must by string');
    if(!propertyValue)
        return Promise.reject('propertyValue cannot be undefined');
    if(typeof propertyValue !== 'string')
        return Promise.reject('propertyValue must by string');
    
    return items.filter(item => {
        if(String(item[property]) === propertyValue)
            return true;
        return false;
    })
}