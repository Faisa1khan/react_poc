import React, { Fragment, useEffect, useState, useMemo } from "react";
import Pagination from "rc-pagination";
import localeInfo from "rc-pagination/lib/locale/en_US";
import "rc-pagination/assets/index.css";
import { Table } from "react-bootstrap";
import { data as localData } from "../api/data";
import axios from "axios";

const ServerPagination = () => {
  const [api, setApi] = useState("offset-10-1");

  console.log(localData);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
  };

  const handlePageChange = (current, pageSize) => {
    setApi(`offset-10-${current}`);
    console.log(api);
    console.log("onChange:current=", current);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(localData[api]);
    axios
      .get(localData[api])
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, [api]);

  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ _id, name, details }, index) => (
            <tr key={_id}>
              <td>{index + 1}</td>
              <td>{_id}</td>
              <td>{name}</td>
              <td>{details.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        showQuickJumper
        showSizeChanger
        defaultPageSize={15}
        defaultCurrent={1}
        total={450}
        locale={localeInfo}
        onShowSizeChange={onShowSizeChange}
        onChange={handlePageChange}
      />
    </Fragment>
  );
};

export default ServerPagination;
