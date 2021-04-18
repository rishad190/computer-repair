import React from "react";
import { useForm } from "react-hook-form";

const OrderListData = (props) => {
  const { name, email, service, payWith, status, _id } = props.payment;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const statusUpdate = data.status;
    const id = data.id;
    const updateData = { statusUpdate, id };
    console.log(data);
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert(" added successfully");
        }
      });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{payWith}</td>
      <td>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            style={{ display: "none" }}
            defaultValue={_id}
            {...register("id")}
          />
          <select {...register("status")}>
            <option>{status}</option>
            <option value="Pending">Pending</option>
            <option value="On Going">On Going </option>
            <option value="Done">Done</option>
          </select>
          <input className="btn btn-primary ms-2" type="submit" />
        </form>
      </td>
    </tr>
  );
};

export default OrderListData;
