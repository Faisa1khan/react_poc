import React, { useState } from "react";

import "./App.css";
import "../node_modules/video-react/dist/video-react.css"; // import css
import Auth from "./auth";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import ServerPagination from "./components/ServerPagination";

function App() {
  const initialValue = () => window.localStorage.getItem("auth") || false;
  const [auth, setAuth] = useState(initialValue);
  return (
    <>
      {auth ? (
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/client-side" render={() => <div>client</div>} />
          <Route exact path="/server-side" component={ServerPagination} />
        </div>
      ) : (
        <Auth login={setAuth} />
      )}
    </>
  );
}

export default App;
