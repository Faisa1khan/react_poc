import React, { useEffect ,useState} from 'react';
import {Pagination} from 'react-bootstrap'

/*
    This component will receive two props pageCount and active page
    Will only change if page count changes
    pageCount depends on dataLength and sizePerPage

    Will have to understand useMemo and useCallback because of multiple unnecessary renders
*/



function PaginationComponent({pageCount,activePage}) {

    const [prevCount,setPrevCount]=useState(-1)
    
    
    useEffect(()=>{
         console.log('pageCount changed',prevCount,pageCount)
         setPrevCount(pageCount)
         
    },[pageCount])
    
    console.log('rendered',prevCount==pageCount)

    const pageItems=[]
    
        
    for(let i=1;i<=prevCount;i++)
    {
        pageItems.push(
        <Pagination.Item key={i} active={i === activePage}>
            {i}
        </Pagination.Item>
        )
    }
    
        
    
    return(
       
        <div>
            <Pagination>

               {pageItems}
              
               
                      
        </Pagination>
         
        </div>
    )
}

export default PaginationComponent;