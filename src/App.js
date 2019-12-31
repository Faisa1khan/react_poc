import React from "react";
import "./App.css";
import { Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css"; // import css
import MultiLanguage from "./components/MultiLanguage";
import VideoSource from "./components/VideoSource";
import Header from "./components/header";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        {/* <MultiLanguage /> */}
        {/* <Player muted={true} fluid={false} width={500} height={500}>
        <VideoSource
          isVideoChild
          src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        />
      </Player> */}

        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/client-list" render={() => <div>client</div>} />
        <Route exact path="/server-list" render={() => <div>server</div>} />
      </BrowserRouter>
    </div>
  );
}

export default App;
