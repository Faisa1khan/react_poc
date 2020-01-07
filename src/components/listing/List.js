import React from "react";

const List = ({ userdata }) => {
  const { name, username, email, address } = userdata;
  return (
    <tr key={username}>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
    </tr>
  );
};

export default List;
