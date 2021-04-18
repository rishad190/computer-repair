import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const emailValue = {
      email: data.email,
    };
    console.log(emailValue);
    fetch("https://secure-castle-59124.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailValue),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Service added successfully");
        }
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="book_upper">
              <h3>Make Admin</h3>
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
            <div className="row">
              <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-group mb-5">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
