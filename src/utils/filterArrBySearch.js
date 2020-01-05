
export function filterArrBySearch(items, search){
    search = search.toLowerCase();
    return items.filter(item => matchForName(item, search))
}

function matchForName(item, name){  // is name a substring in item.name
    if(item && name && item['name'] && item['name'].toLowerCase().includes(name))
        return true;
    return false;
}