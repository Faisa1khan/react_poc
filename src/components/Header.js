import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import history from "../history";
const Header = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("auth");
    console.log(history);
    window.location.reload();
    // history.push("/");
  };
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
        </Nav>
        <Nav className="align-items-center">
          <Nav.Link>User</Nav.Link>
          <Nav.Link>
            <Button size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
