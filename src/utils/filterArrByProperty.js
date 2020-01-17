import { isObject } from "../utils";

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
        const [key, value] = getKeyValue(item, property);
        if(key && String(value) === propertyValue)
            return true;
        return false;
    })
}

// returns [key, value] in any kind of object(nested) on a given key
function getKeyValue(obj, key){
    for(const _key of Object.keys(obj)){
        if(key === _key)
            return [_key, obj[_key]];
        if(isObject(obj[_key]))
            return getKeyValue(obj[_key], key);
    }
    return [undefined, undefined];
}