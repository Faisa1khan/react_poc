import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import ViewMore from "./ViewMore";
const ViewMoreButton = ({ setModalShow, modalShow, data }) => {
  return (
    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        View More
      </Button>

      <ViewMore
        show={modalShow}
        data={data}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
};

export default ViewMoreButton;
