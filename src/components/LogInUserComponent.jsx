

import React, { useState,useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogInUserComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const [emailIdErr, setEmailIdErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  //passwordhandler
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user!=null){
      navigate("/pageNotFound");
      window.location.reload(true);
    } 
    
  }, [])

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
  }

   const [message, setMessage] = useState("");
   const [errormsg, setErrorMsg] = useState("");
   const [isError, setError] = useState(false);
  function emailIdValidation(e) {
    let item = e.target.value;
    const regex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regex.test(item)) {   
      setEmailIdErr(false);
    } else if (!regex.test(emailId) && emailId !== "") {
      setEmailIdErr(true);
    } else {
      setEmailIdErr(true);
    }
    setEmailId(item);
  }

  function login() {

    let user = {
      emailId: emailId,
      password: password,
    };
    axios
      .post("http://localhost:8888/login", user)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));

        console.log(response.data);
        if (response.data.userType == "user") {
          console.log(true);
          navigate("/welcomeuser");
        } else if (response.data.userType == "Admin") {
          navigate("/welcomeadmin");
        } else {
          alert("You don't have any account, Please signUp");
          navigate("/signUp");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("You don't have any account, Please signUp");
        //navigate("/signUp");
      });
  }

  /*------------------------------------------------------------------------*/

  return (
    <div className="login">
      <div className="p1">
        <br></br>
        <div className="container">
          <div className="row">
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{ backgroundColor: "transparent" }}
            >
              <h1 className="text-center" style={{ color: "Black" }}>
                LOG-IN
              </h1>
              <div className="card-body">
                <div className="mb-1">
                  <label style={{ color: "Black" }}>Email Id:</label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Enter Email"
                    value={emailId}
                    onChange={emailIdValidation}
                  />
                  <br />
                  {emailIdErr ? (
                    <div className="validation" style={{ color: "Black" }}>
                     Invalid Email Address
                    </div>
                  ) : null}
                  
                </div>
                <div className="mb-1">
                  <label style={{ color: "Black" }}>Password:</label>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={passwordHandler}
                  />
                  <br />
                  {passwordErr ? (
                    <div className="validation" style={{ color: "Black" }}>
                      Enter Password with minimum 3 characters
                    </div>
                  ) : null}
                </div>
                {!passwordErr && !emailIdErr ? (
                  <div className="mb-1">
                    <center>
                      <button
                        className="btn btn-success btn-lg w-75"
                        onClick={login}
                      >
                        LOGIN
                      </button>
                      {isError ? (
                        <div className="validation">{errormsg}</div>
                      ) : null}
                    </center>
                  </div>
                ) : null}
                <div className="text-center">
                  <Link to="/signUp" className="text-dark">
                    New to the JungleSafari? Create an account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
