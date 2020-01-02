//Util to get total page count based on the no of items returned afer filtering
function getPageCount(totalItems,itemsPerPage)
{
    return Math.ceil(totalItems/itemsPerPage)
}


//Util to get the context based on which page is currently selected
function getPaginationContext(totalItems,itemsPerPage,activePage)
{
    
    const totalPages=Math.ceil(totalItems/itemsPerPage)
    
    
    const firstItemIndex=(activePage<=totalPages && activePage>0)?itemsPerPage*(activePage-1):undefined//Index of first post in activePage
    const lastItemIndex=(activePage<totalPages && activePage>0)?//Index of last item in activePage
                            (itemsPerPage*activePage)-1:
                        (activePage==totalPages)?
                            totalItems-1:
                            undefined //when activePage>totalPages
    const count=lastItemIndex-firstItemIndex+1//Total items in the activePage
    return{firstItemIndex,lastItemIndex,count}
    
}

 

export {getPageCount,getPaginationContext}



 



