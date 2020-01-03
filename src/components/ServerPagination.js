import React, { useEffect, useState } from "react";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import {
  Table,
  InputGroup,
  FormControl,
  Container,
  Col,
  Row,
  Button
} from "react-bootstrap";
import axios from "axios";
import endpoint from "../endpoint";

const ServerPagination = () => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  console.log(pageSize);

  const onShowSizeChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
  };

  const handlePageChange = (current, pageSize) => {
    setCurrentPage(current);
    console.log("onChange:current=", current);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint + "people", {
        params: {
          _page: currentPage,
          _limit: pageSize,
          _sort: sortBy,
          _order: sortOrder
        }
      })
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [currentPage, pageSize, sortBy, sortOrder]);

  return (
    <Container>
      <Row className="mb-3 mt-3">
        <Col lg={3}>
          <InputGroup size="sm">
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
        </Col>
        <Col lg={3}>
          <select
            onChange={e => setPageSize(e.target.value)}
            defaultValue={pageSize}
          >
            <option value="10" defaultValue>
              10
            </option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </Col>
        <Col lg={{ span: 2, offset: 4 }}>
          <Button
            variant="secondary"
            size="sm"
            className="mr-1"
            onClick={() => setSortOrder("asc")}
          >
            Asc
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setSortOrder("dsc")}
          >
            Dsc
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Button onClick={() => setSortBy("name")}>Name</Button>
            </th>
            <th onClick={() => setSortBy("username")}>
              <Button onClick={() => setSortBy("username")}>Username</Button>
            </th>
            <th>
              <Button onClick={() => setSortBy("email")}>Email</Button>
            </th>
            <th>
              <Button onClick={() => setSortBy("city")}>City</Button>
            </th>
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
      <Pagination
        showQuickJumper
        showSizeChanger
        defaultPageSize={10}
        defaultCurrent={1}
        total={100}
        locale={localeInfo}
        onShowSizeChange={onShowSizeChange}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default ServerPagination;
