import React from "react";
import { Table } from "react-bootstrap";
import List from "./List";
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
        {data.map(userdata => (
          <List key={userdata.username} userdata={userdata} />
        ))}
      </tbody>
    </Table>
  );
};

export default Lists;
