import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../actions";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="main-navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/client-list">Client</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/server-list">Server</Link>
          </li>
          <li>
            <a className="nav-link" href="#" onClick={props.logout}>Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapActions = {
  logout: authActions.logout
}
export default connect(null, mapActions)(Header);