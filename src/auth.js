import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { user } from "./api/users";
// import axios from 'axios'

const Auth = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    user.name.map(name => {
      if (username === name && password === user.password) {
        window.localStorage.setItem("auth", true);
        return login(true);
      } else {
        return console.warn("Incorrect Username or password");
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Auth;
