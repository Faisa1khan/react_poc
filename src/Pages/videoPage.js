import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../Components/header";

import "./videoPage.scss";

class VideoPage extends Component{

    render(){
        return (
            <div className="video-page">
                <div className="video-page__header">
                    <Header />
                </div>
                <div className="video-page__video">
                    Video
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    locale: state.videoPage.lang
})
export default connect(null)(VideoPage);