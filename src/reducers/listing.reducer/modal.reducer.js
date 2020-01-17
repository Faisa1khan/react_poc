import { modalConstants } from "../../constants";


export default function modal(state={}, action){
    switch(action.type){
        case modalConstants.OPEN_MODAL:
            const { emp_id } = action.payload;
            return {
                identifier: {
                    emp_id
                } 
            };
        case modalConstants.CLOSE_MODAL:
            return {};
        default:
            return state;
    }
}