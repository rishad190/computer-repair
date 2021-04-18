import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const DashboardMain = () => {
  const [user, setUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://secure-castle-59124.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, [user.email]);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="book_upper">
              {isAdmin && <h2> Welcome Admin Dashboard</h2>}
              {!isAdmin && <h2> Welcome User Dashboard</h2>}
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
