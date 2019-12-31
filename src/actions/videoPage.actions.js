import { videoConstants } from "../constants/videoPage.constants";

export default {
    changeLang
}

function changeLang(lang){
    return {
        type: videoConstants.SET_LANG,
        lang
    };
}
