import React from "react";
import "./App.css";
import "../node_modules/video-react/dist/video-react.css"; // import css

import "./styles/index.scss";

import { Router, Route, Switch } from "react-router-dom";
import { history } from "./utils";

// components
import Container from "./components/Container";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/privateRoute"

// pages
import LoginPage from "./pages/LoginPage/LoginPage";
import ListingPage from "./pages/ListingPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import VisualDashboard from "./pages/VisualDashboard";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <PrivateRoute exact path="/client-list">
              <ListingPage />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <ProfilePage />
            </PrivateRoute>
            <PrivateRoute exact path="/visual">
              <VisualDashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/detail">
              <DetailPage />
            </PrivateRoute>
            <PrivateRoute exact path="/server-list" >
              <div>Server-list</div>
            </PrivateRoute>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
