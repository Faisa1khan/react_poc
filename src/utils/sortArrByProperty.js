// sorts array of objects by a property
// bool - true for sorting in descending order
export function sortArrByProperty(items, property, bool){
    bool = bool || false;

    if(!items)
        return Promise.reject('items cannot be undefined');
    if(items.constructor !== Array)
        return Promise.reject('items must be array');
    if(items.length < 1)
        return Promise.reject('items array cannot be empty');
    if(!property)
        return Promise.reject('property cannot be undefined');
    if(typeof property !== 'string')
        return Promise.reject('property must be string');
    if(!items[0][property])
        return Promise.reject(`${property} does not exist in items array`);
    
    let compareFnc; 
    if(typeof items[0][property] === 'string' && bool===false) {  // sort on string in ascending
        compareFnc = (a, b) => {
            const x = a[property].toLowerCase();
            const y = b[property].toLowerCase();
            if (x < y)  return -1;
            if (x > y)  return 1;
            return 0;
        }
    }
    if(typeof items[0][property] === 'string' && bool===true) {  // sort on string in descending
        compareFnc = (a, b) => {
            const x = a[property].toLowerCase();
            const y = b[property].toLowerCase();
            if (x < y)  return 1;
            if (x > y)  return -1;
            return 0;
        }
    }
    if(typeof items[0][property] === 'number' && bool===false) {  // sort on numbers in ascending
        compareFnc = (a, b) => a[property] - b[property];
    }
    if(typeof items[0][property] === 'number' && bool===true) {  // sort on numbers in descending
        compareFnc = (a, b) => b[property] - a[property];
    }
    return items.sort(compareFnc);
}