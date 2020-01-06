import React from "react";
import { Col, Form } from "react-bootstrap";
import { ExportCSV } from "./ExportCSV";
// import styles from "./ListHeader.module.css";

// console.log(styles);
const ListHeader = ({
  searchInput,
  setSearchInput,
  setSortBy,
  setPageSize,
  data
}) => {
  return (
    <Form.Row className="mt-4">
      <Form.Group as={Col} lg="3" controlId="formGridCity">
        <Form.Label>Search</Form.Label>
        <Form.Control
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        as={Col}
        lg={{ span: 2, offset: 5 }}
        controlId="formGridState"
      >
        <Form.Label>Sort by</Form.Label>
        <Form.Control as="select" onChange={e => setSortBy(e.target.value)}>
          <option value="name" defaultValue>
            Name
          </option>
          <option value="username">Username</option>
          <option value="email">Email</option>
          <option value="city">City</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} lg="1" controlId="formGridState">
        <Form.Label>Page Size</Form.Label>
        <Form.Control as="select" onChange={e => setPageSize(e.target.value)}>
          <option value="10" defaultValue>
            10
          </option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="100">All</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} lg="1" controlId="formGridState">
        <Form.Label>Data</Form.Label>
        <ExportCSV csvData={data} fileName="demo" />
      </Form.Group>
    </Form.Row>
  );
};

export default ListHeader;
