import React from "react";
import { Table } from "react-bootstrap";
import List from "./List";
import { useSelector, useDispatch } from "react-redux";
const Lists = ({ data, setSortBy, paramsInput }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
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
