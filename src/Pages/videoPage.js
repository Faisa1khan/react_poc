import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../Components/header";
import VideoPlayer from "../Components/videoPlayer/videoPlayer";

import "./videoPage.scss";


class VideoPage extends Component{

    render(){
        return (
            <div className="video-page">
                <div className="video-page__header">
                    <Header />
                </div>
                <div className="video-page__video-player">
                    <VideoPlayer />
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    locale: state.videoPage.lang
})
export default connect(null)(VideoPage);