import React from 'react';
import ModalView from '../../../generics/Modal';

function DetailsSection({details,user}) {
    return(
        <div>
            
             {
                Object.keys(details).map((detail)=>{
                    return(
                    <li key={detail}>{detail} : {details[detail]}</li>
                    )
                })
            } 
            <ModalView header={`More details about ${user.name}`} user={user} btnText='Show More' />
        </div>
    )
}

export default DetailsSection;