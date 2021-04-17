import React, { useContext } from "react";
import logo from "../../images/logo.png";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import firebaseConfig from "../firebase.Config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleLogin = (e) => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signInDetails = {
          name: displayName,
          email: email,
          success: true,
          image: photoURL,
        };
        setUser(signInDetails);
        storeToken();
        history.replace(from);
        return signInDetails;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
  };
  const storeToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };

  return (
    <section>
      <div className="login_logo text-center mt-5">
        <img src={logo} alt="" />
        <h3>Computer Repair</h3>
      </div>
      <div className="text-center mt-5">
        <h4>Login With</h4>
        <button onClick={handleLogin} className="mt-5">
          Continue With Google
        </button>
      </div>
    </section>
  );
};

export default Login;
