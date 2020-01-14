import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import { ExportCSV } from "./ExportCSV";
// import styles from "./ListHeader.module.css";

const ListHeader = ({ data, paramsInput }) => {
  console.log("from listHeaders", paramsInput);
  const { params, setParams, chart, showChart } = paramsInput;
  return (
    <Form.Row className="mt-4">
      <Form.Group as={Col} lg="3" controlId="formGridCity">
        <Form.Label>Search</Form.Label>
        <Form.Control
          value={params.q}
          onChange={e => setParams({ ...params, q: e.target.value })}
        />
      </Form.Group>

      <Form.Group
        as={Col}
        lg={{ span: 2, offset: 4 }}
        controlId="formGridState"
      >
        <Form.Label>Sort by</Form.Label>
        <Form.Control
          as="select"
          onChange={e => setParams({ ...params, _sort: e.target.value })}
        >
          <option value="name" defaultValue>
            Name
          </option>
          <option value="city">City</option>
          <option value="ctc">CTC</option>
          <option value="company">Company</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} lg="1" controlId="formGridState">
        <Form.Label>Page Size</Form.Label>
        <Form.Control
          as="select"
          onChange={e => setParams({ ...params, _limit: e.target.value })}
        >
          <option value="10" defaultValue>
            10
          </option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="100">All</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} lg="1" controlId="formGridState">
        <Form.Label>Chart</Form.Label>
        <Button onClick={() => showChart(!chart)}>
          {chart ? "Hide" : "Chart"}
        </Button>
      </Form.Group>
      <Form.Group as={Col} lg="1" controlId="formGridState">
        <Form.Label>Data</Form.Label>
        <ExportCSV csvData={data} fileName="demo" />
      </Form.Group>
    </Form.Row>
  );
};

export default ListHeader;
