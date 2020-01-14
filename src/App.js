import React from "react";

import "./App.css";
import "../node_modules/video-react/dist/video-react.css"; // import css
import Auth from "./auth";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import ServerPagination from "./components/ServerPagination";
import { useAuth } from "./utils/hooks/useAuth";
import ImageCropper from "./components/UploadData/ImageUpload";
import Demo from "./components/HighCharts/demo";
import Chart from "./components/HighCharts/Charts";
import Table from "./components/PivotTable/Table";
function App() {
  const { auth, signin } = useAuth();
  return (
    <>
      {auth ? (
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            exact
            path="/client-side"
            render={() => <div>Client Side</div>}
          />
          <Route exact path="/word-cloud" component={Demo} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/server-side" component={ServerPagination} />
          <Route exact path="/upload-image" component={ImageCropper} />
          <Route exact path="/table" component={Table} />
        </div>
      ) : (
        <Auth signin={signin} />
      )}
    </>
  );
}

export default App;
