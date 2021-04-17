import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../App";
import BookingCard from "../BookingCard/BookingCard";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const Booking = () => {
  const [user, setUser] = useContext(UserContext);
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showbooking?email=" + user.email)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10">
          <div className="row ">
            <div className="book_upper">
              <h3>Booking</h3>
              <div>
                <h5>{user.name}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            {bookings.map((booking) => (
              <BookingCard key={booking._id} booking={booking}></BookingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
