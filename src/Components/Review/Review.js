import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Review = () => {
  const [user, setUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const reviewStore = {
      name: data.name,
      description: data.description,
      company: data.company,
      image: user.image,
    };
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewStore),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Review added successfully");
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
          <div className="row ">
            <div className="book_upper">
              <h3>Review</h3>
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <form className="p-5 w-50" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className="form-group mb-5">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group mb-5">
                <input
                  className="form-control "
                  type="text"
                  placeholder="Company Name "
                  {...register("company", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group  mb-5">
                <input
                  className="form-control  "
                  type="text"
                  placeholder="Description "
                  {...register("description", { required: true })}
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
  );
};

export default Review;
