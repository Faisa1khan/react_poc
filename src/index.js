import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
// import Auth from "auth";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./i18n";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-router-dom";
import history from "./history";
import { ProvideAuth } from "./utils/hooks/useAuth";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <Router history={history}>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
