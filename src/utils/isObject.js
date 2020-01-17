
export function isObject(value){
    if(value && Object.getPrototypeOf(value) === Object.prototype)
        return true;
    return false;
}