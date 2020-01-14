import React from 'react';
import ModalView from '../../../generics/Modal';
import { Button } from 'react-bootstrap';

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
            
            <ModalView 
                header={`More details about ${user.name}`}
                data={user.details}
                btnText='Show on same page' />
            <Button>Show on New Page</Button>
        </div>
    )
}

export default DetailsSection;