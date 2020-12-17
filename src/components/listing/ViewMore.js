import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataDetails } from "../../actionCreator";
import Axios from "axios";
const ViewMore = props => {
  console.log(props.data);
  const { id, name, gender, city, country, company, ctc } = props.data;
  const [moredata, setMoreData] = useState(props.data);
  const api = useSelector(state => state.api);
  const disptach = useDispatch();
  //   console.log(api, fetchDataDetails);
  useEffect(() => {
    if (props.show) {
      Axios.get(`http://localhost:4000/details/${id}`).then(res =>
        setMoreData({ ...moredata, ...res.data })
      );
    }
  }, [id, props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Profile</h4>
        <p>{JSON.stringify(props.data, null, 2)}</p>
        {moredata && <p>{JSON.stringify(moredata, null, 2)}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewMore;
