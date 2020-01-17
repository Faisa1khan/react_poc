import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { authActions } from "../../actions";

const Header = (props) => {
  const loggedIn = props.loggedIn || true;

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
          {loggedIn && 
              <li><a className="nav-link" href="#" onClick={props.logout}>Logout</a></li> 
          }
          {loggedIn &&
              <Link className="nav-link" to="/profile">Profile</Link>
          }
          {loggedIn && 
            <Link className="nav-link" to="/visual">Visual</Link>
          }
          <li className="nav-item">
            <Link className="nav-link" to="/upload">Upload</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapState = state => ({
  loggedIn: state.auth.loggedIn
})
const mapActions = {
  logout: authActions.logout
}
export default connect(mapState, mapActions)(Header);