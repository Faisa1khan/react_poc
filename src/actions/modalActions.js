import { modalConstants } from "../constants";

export const modalActions = {
    openModal,
    closeModal
};

function openModal(emp_id){
    return {
        type: modalConstants.OPEN_MODAL,
        payload: {
            emp_id
        }
    }
}

function closeModal(){
    return {
        type: modalConstants.OPEN_MODAL
    }
}