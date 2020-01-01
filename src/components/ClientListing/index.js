import React,{useState} from 'react';
import PaginationComponent from './PaginationComponent';

function ClientListing() {
    const [inpCount,setInpCount]=useState(10)
    const [pageCount,setPageCount]=useState(10)
  
    return(
      <div style={{padding:20}}>
          ClientListing<br/>
          <input placeholder='No of posts' onChange={(e)=>setInpCount(e.target.value)} value={inpCount} />
          {/* <input placeholder='Current active page' onChange={(e)=>setInpCount(e.target.value)} value={inpCount} /> */}
          <button onClick={()=>setPageCount(inpCount)}>Change</button>
          {pageCount} {inpCount}
         <PaginationComponent pageCount={pageCount} activePage={1} />
      </div>  
    )    
}



export default ClientListing;