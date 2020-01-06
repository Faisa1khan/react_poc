import React, { useState } from 'react';
import {Modal, Button} from 'react-bootstrap'

function ModalView({btnText,header,user}) {

    const [show,setShow]=useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button onClick={()=>handleShow()}>
                {btnText}
            </Button>
            <Modal show={show} onHide={handleClose} >
               <Modal.Header>
                   {header}
               </Modal.Header>
               <Modal.Body>
                {
                    Object.keys(user.details).map((user_prop)=>{
                    return(
                    <p>{user_prop} : {user.details[user_prop]}</p>
                    )
                })  }
               </Modal.Body>
               <Modal.Footer>
                    <Button onClick={()=>handleClose()}>Close</Button>
               </Modal.Footer>
            </Modal>
        </>
    )    
}

export default ModalView;