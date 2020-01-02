import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {connect} from 'react-redux'
import {setItemsPerPage} from '../../../actions'

function FilterComponent(props) {
    return(
    <div>
        {/*Change items per page*/}
        <DropdownButton title='Items er page'>
            {
                [5,10,15,20].map((value)=>{
                    return(
                        <Dropdown.Item key={value} onClick={()=>props.setItemsPerPage(value)}>{value}</Dropdown.Item>
                    )
                })
            }
        </DropdownButton>
    </div>
    )
}

const mapStateToProps=(store)=>{
    return{
        itemsPerPage:store.clientListing.itemsPerPage
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setItemsPerPage:(itemsPerPage)=>dispatch(setItemsPerPage(itemsPerPage))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterComponent);