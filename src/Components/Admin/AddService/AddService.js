import React from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { useState } from "react";

const AddService = () => {
  const [user, setUser] = useContext(UserContext);
  const [uploadTime, setUploadTime] = useState(0);
  const [imgValue, setImgValue] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const productValue = {
      title: data.title,
      description: data.description,
      price: data.price,
      image: imgValue,
    };
    console.log(productValue);
    fetch("https://secure-castle-59124.herokuapp.com/addServices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productValue),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Service added successfully");
        }
      });
  };

  const options = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      let percentage = Math.floor((loaded * 100) / total);
      console.log(`${loaded}kb of ${total}kb | ${percentage}%`);
      if (percentage < 100) {
        setUploadTime(percentage);
      }
    },
  };

  const handleImageUpload = (event) => {
    const newImage = new FormData();
    newImage.set("key", "1e3f125677d34dd6addc22731df17a5a");
    newImage.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", newImage, options)
      .then(function (response) {
        setImgValue(response.data.data.display_url);
        setTimeout(() => {
          setUploadTime(0);
        }, 1000);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
        setUploadTime(0);
      });
  };
  console.log(uploadTime);
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="book_upper">
              <h3>Add Service</h3>
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
                    type="text"
                    placeholder="Service Title"
                    {...register("title", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group mb-5">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Description "
                    {...register("description", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group mb-5">
                  <input
                    className="form-control "
                    type="text"
                    placeholder="Price "
                    {...register("price", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group mb-5">
                  <input
                    className="form-control "
                    onChange={handleImageUpload}
                    type="file"
                  />
                </div>
                {uploadTime > 0 && (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
                <div className="form-group text-right">
                  <button type="submit" className="btn btn-primary">
                    Send
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

export default AddService;
