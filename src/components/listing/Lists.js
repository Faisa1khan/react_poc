import React from "react";
import { Table } from "react-bootstrap";
import List from "./List";
// import { useSelector, useDispatch } from "react-redux";
const Lists = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Company</th>
          <th>City</th>
          <th>CTC</th>
          <th>Country</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map(userdata => (
          <List key={userdata.id} userdata={userdata} />
        ))}
      </tbody>
    </Table>
  );
};

export default Lists;
