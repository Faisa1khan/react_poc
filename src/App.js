import React from "react";
import "./App.css";
import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css"; // import css
import MultiLanguage from "./components/MultiLanguage";
import VideoSource from "./components/VideoSource";

function App() {
  return (
    <div className="App">
      <MultiLanguage />
      <Player width="50%" muted={true}>
        <VideoSource
          isVideoChild
          src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        />
      </Player>
    </div>
  );
}

export default App;
