import React, { useState  } from 'react';
import {Modal, Button, Tabs,Tab,Sonnet} from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import ExportBody from '../ExportBody';
 

function ExportModal({btnText,tabbed,tabs}) {

    const [show,setShow]=useState(false)
    const [mode,setMode]=useState('excel')
     

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
       <div>
            <Button onClick={()=>handleShow()}>
                {btnText}
            </Button>
            <Modal show={show} onHide={handleClose} >

                 
                   {
                      tabbed?
                        
                        <Tabs onClick={(e)=>setMode(e.target.dataset.rbEventKey)}  defaultActiveKey={mode} >
                            {
                                tabs.map((tab)=>{
                                    return(
                                        <Tab  eventKey={tab.value} title={tab.name} />
                                        )
                                    })
                            }
                        </Tabs>
                    
                      :
                        null
                    
                    }
                
               <Modal.Body>

                    
                 <ExportBody 
                    mode={mode}
                   
                    />
                    
               </Modal.Body>
               <Modal.Footer>
                    <Button onClick={()=>handleClose()}>Close</Button>
               </Modal.Footer>
            </Modal>
             
       </div>
    )    
}

export default ExportModal;