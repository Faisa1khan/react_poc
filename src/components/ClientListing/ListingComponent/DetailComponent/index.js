import React from 'react';

function DetailsSection({details}) {
    return(
        <div>
            
             {
                Object.keys(details).map((detail)=>{
                    return(
                    <li key={detail}>{detail} : {details[detail]}</li>
                    )
                })
            } 
        </div>
    )
}

export default DetailsSection;