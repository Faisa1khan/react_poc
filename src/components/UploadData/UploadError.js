import React, { Fragment } from "react";
import { Table } from "react-bootstrap";

const UploadError = ({ data }) => {
  return (
    <Fragment>
      <Table striped bordered hover>
        <thead>
          {Object.values(data[0]).map(item => (
            <th>{item} </th>
          ))}
        </thead>
        {/* <tbody>
        {data.map(userdata => (
          <List key={userdata.id} userdata={userdata} />
        ))}
      </tbody> */}
      </Table>
    </Fragment>
  );
};

export default UploadError;
