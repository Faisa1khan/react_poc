
export function getPaginatedItems(items, offset, limit) {
    if(items && items.constructor === Array)
        return items.slice(offset, offset+limit);
    return items;
}