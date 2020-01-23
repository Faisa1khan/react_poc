import React from "react";
import ViewMoreButton from "./ViewMoreButton";
const List = ({ userdata }) => {
  const { name, gender, city, country, company, ctc } = userdata;
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{company}</td>
      <td>{city}</td>
      <td>{ctc} $</td>
      <td>{country}</td>
      <td>
        <ViewMoreButton
          modalShow={modalShow}
          setModalShow={setModalShow}
          data={userdata}
        />
      </td>
    </tr>
  );
};

export default List;
