
export function isArray(value){
    if(value && value.constructor === Array)
        return true;
    return false;
}