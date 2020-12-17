import React, { useState, useEffect } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { ExportCSV } from "./ExportCSV";
// import styles from "./ListHeader.module.css";
import { useDebounce } from "../../utils/hooks/useDebounce";
const ListHeader = ({ data, paramsInput }) => {
  console.log("from listHeaders", paramsInput);
  const { params, setParams, mode, setMode } = paramsInput;
  const [input, setInput] = useState("");
  const getValue = useDebounce(input, 500);

  const handleSearch = e => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log(getValue);
    setParams({ ...params, q: getValue });
  }, [getValue]);

  return (
    <Form.Row className="mt-4">
      <Form.Group as={Col} lg="3" controlId="formGridCity">
        <Form.Label>Search</Form.Label>
        <Form.Control value={input} onChange={handleSearch} />
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
        <Form.Label>View Mode</Form.Label>
        <Form.Control as="select" onChange={e => setMode(e.target.value)}>
          <option value="List" defaultValue>
            List
          </option>
          <option value="Chart">Chart</option>
          <option value="PivotTable">Pivot Table</option>
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
