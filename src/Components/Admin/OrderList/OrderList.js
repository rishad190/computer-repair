import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import OrderListData from "../OrderListData/OrderListData";

const OrderList = () => {
  const [user, setUser] = useContext(UserContext);
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showpayment")
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
      });
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="book_upper">
              <h3>Order List</h3>
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email ID</th>
                    <th scope="col">Service</th>
                    <th scope="col">Payment With</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <OrderListData
                      key={payment._id}
                      payment={payment}
                    ></OrderListData>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
