import {videoConstants} from "../constants/videoPage.constants";

import messages from "../messages";

const initialState = {
    lang: 'en',
    ids: messages.en 
}

function videoPage(state=initialState, action) {
    switch(action.type){
        case videoConstants.SET_LANG:
            return {
                lang: action.lang,
                ids: messages[action.lang]
            };
        default:
            return state;
    }
}

export default videoPage;