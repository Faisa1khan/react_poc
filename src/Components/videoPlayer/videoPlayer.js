import React from "react";
import { connect } from "react-redux";

//import videoActions from "../actions/videoPage.actions";


const VideoPlayer = (props) => {
    //const [lang, changeLang] = useState('en');
    return (
        <div className="video-player" controls="controls">
            <video width="600" height="400" controls>
                <source src="https://www.youtube.com/watch?v=Bey4XXJAqS8&t=10s&html5=True" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
/*
const mapState = state => ({
    lang: state.videoPage.lang || 'en',
    ids: state.videoPage.ids || {}
})
const actions = {
    changeLang: videoActions.changeLang
}
*/
export default connect(null, null)(VideoPlayer);