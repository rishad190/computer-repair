import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Payment from "../Payment/Payment";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/showServices")
      .then((res) => res.json())
      .then((data) => {
        const product = data.find((pd) => pd._id === id);
        setProduct(product);
      });
  }, [id]);

  const { title } = product;

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row ">
            <div className="book_upper">
              <h3>Book</h3>
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
          </div>
          <div className="row w-50 mt-5">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" value={user.name} />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating">
              <input type="email" class="form-control" value={user.email} />
              <label for="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                class="form-control"
                type="text"
                value={title}
                aria-label="Disabled input example"
                disabled
              />
            </div>
            <p>
              Your Service Charge Will Be $<b>{product.price}</b>
            </p>
          </div>
          <div className="row w-50">
            <Payment product={product} user={user}></Payment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
