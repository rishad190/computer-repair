import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import ManageAction from "../ManageAction/ManageAction";

const Manage = () => {
  const [user, setUser] = useContext(UserContext);
  const [manage, setManage] = useState([]);
  useEffect(() => {
    fetch("https://secure-castle-59124.herokuapp.com/showServices")
      .then((res) => res.json())
      .then((data) => {
        setManage(data);
      });
  }, []);
  console.log(manage);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="book_upper">
              <h3>Manage List</h3>
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
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {manage.map((pd) => (
                    <ManageAction key={pd._id} pd={pd}></ManageAction>
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

export default Manage;
