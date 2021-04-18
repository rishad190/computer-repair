import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Review from "./Components/Review/Review";
import Booking from "./Components/Booking/Booking";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import OrderList from "./Components/Admin/OrderList/OrderList";
import AddService from "./Components/Admin/AddService/AddService";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
import Manage from "./Components/Admin/Manage/Manage";
import DashboardMain from "./Components/Dashboard/DashboardMain/DashboardMain";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    image: "",
    error: "",
    success: false,
  });

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/book/:id">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/dashboard/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/dashboard/booking">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/order">
              <OrderList></OrderList>
            </PrivateRoute>

            <PrivateRoute path="/dashboard/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manage">
              <Manage></Manage>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashboardMain></DashboardMain>
            </PrivateRoute>
            <Route path="*">
              <h1>Error</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
