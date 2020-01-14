import React from "react";

const List = ({ userdata }) => {
  const { name, gender, city, country, company, ctc } = userdata;
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{company}</td>
      <td>{city}</td>
      <td>{ctc} $</td>
      <td>{country}</td>
    </tr>
  );
};

export default List;
