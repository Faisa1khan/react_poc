import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav activeKey="/">
      <Nav.Item>
        <Link to="/">Active</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/client-list">Active</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/server-list">Active</Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
