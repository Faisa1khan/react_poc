import React, { useState } from 'react';
import {Modal, Button, Tabs,Tab,Sonnet} from 'react-bootstrap'
import { Nav } from 'react-bootstrap';

function ModalView({btnText,header,data,tabbed,tabs}) {

    const [show,setShow]=useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <Button onClick={()=>handleShow()}>
                {btnText}
            </Button>
            <Modal show={show} onHide={handleClose} >

                 
                   {
                      tabbed?
                        
                        <Tabs>
                            {
                                tabs.map((tab)=>{
                                    return(
                                        <Tab title={tab.name} />
                                        )
                                    })
                            }
                        </Tabs>
                    
                      :
                        null
                    
                    }
                
               <Modal.Body>

               
                {
                    data!==undefined?
                    Object.keys(data).map((data_prop)=>{
                    return(
                            <p>{data_prop} : {data[data_prop]}</p>
                        )
                    }) 
                    :
                    null
                 }
               </Modal.Body>
               <Modal.Footer>
                    <Button onClick={()=>handleClose()}>Close</Button>
               </Modal.Footer>
            </Modal>
        </>
    )    
}

export default ModalView;