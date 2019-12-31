import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav activeKey="/">
      <Nav.Link as={Link} to='/'>
        Home
      </Nav.Link>
      <Nav.Link as={Link} to='/client-list'>
        Client
      </Nav.Link>
      <Nav.Link as={Link} to='/server-list'>
        Server
      </Nav.Link>
      <Nav.Link as={Link} to='/auth'>
        Login
      </Nav.Link>
    </Nav>
  );
};

export default Header;
