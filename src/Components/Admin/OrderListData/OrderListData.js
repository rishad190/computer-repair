import React from "react";

const OrderListData = (props) => {
  const { name, email, service, payWith, status } = props.payment;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{payWith}</td>
      <td>{status}</td>
    </tr>
  );
};

export default OrderListData;
