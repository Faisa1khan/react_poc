import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../../actions";

// target - id of bootstrap modal
function ModalBtn({
    target='', 
    name='Button', 
    emp_id=undefined, 
    bootBtnClass='btn-primary',
    openModal
}){

    const handleClick = () => {
        openModal(emp_id);
    }
    return (
        <button 
            type="button" 
            class={`btn btn-sm ${bootBtnClass}`} 
            data-toggle="modal" 
            data-target={target}
            onClick={handleClick}
            >
            {name}
        </button>
    )
}

const mapActions = {
    openModal: modalActions.openModal
};
const con = connect(null, mapActions)(ModalBtn);
export {con as ModalBtn};
