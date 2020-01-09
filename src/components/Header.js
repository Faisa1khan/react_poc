import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
const Header = () => {
  const { signout, user } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        Demo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/client-side">
            Client
          </Nav.Link>
          <Nav.Link as={Link} to="/server-side">
            Server
          </Nav.Link>
          <Nav.Link as={Link} to="/upload-image">
            Upload
          </Nav.Link>
          <Nav.Link as={Link} to="/Chart">
            Chart
          </Nav.Link>
          <Nav.Link as={Link} to="/word-cloud">
            Word Cloud
          </Nav.Link>
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link>{user}</Nav.Link>
          <Nav.Link>
            <Button size="sm" onClick={() => signout()}>
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
