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
                {JSON.stringify(user)}
               </Modal.Body>
               <Modal.Footer>
                    <Button onClick={()=>handleClose()}>Close</Button>
               </Modal.Footer>
            </Modal>
        </>
    )    
}

export default ModalView;