import React from "react";
import { Table } from "react-bootstrap";

const Lists = ({ data, setSortBy }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th onClick={() => setSortBy("username")}>Username</th>
          <th onClick={() => setSortBy("email")}>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, username, email, address }) => (
          <tr key={username}>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{address.city}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Lists;
