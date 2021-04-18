import React from "react";

const ManageAction = (props) => {
  const { title, _id, price } = props.pd;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Successfully deleted");
        }
      });
  };
  return (
    <tr>
      <td>{_id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ManageAction;
