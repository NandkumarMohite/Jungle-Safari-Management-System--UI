
import React, { Component, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import packages from "./pics/packages.jpg";
import addplan from "./pics/Addpackage.jpg";
import users from "./pics/users.jpg";
import career from "./pics/career.jpg";

export default function WelcomeAdminComponent() {
  const navigate = useNavigate();

  const [id, setId] = useState("")
  const [feedback, setfeedback] = useState([])
  const [userName, setuserName] = useState('');
  const [yourMassage, setyourMassage] = useState('');
  const [planYouAssigned, setplanYouAssigned] = useState('');
 
 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user==null){
      navigate("/pageNotFound");
      window.location.reload(true);
    }
    if(user.userType=="Admin"){
       
        console.log(user.userType)
        getFeedback();
       
    }else{
        
      
        navigate("/pageNotFound")
    }
  

   
  }, [])


  function getFeedback() {

    fetch("http://localhost:8888/displayfeedback").then((result) => {
      result.json().then((Response) => {
        console.log(Response)

        setfeedback(Response);
        setId(Response[0].id);
        setuserName(Response[0].userName);    
        setyourMassage(Response[0].yourMassage);
        setplanYouAssigned(Response[0].planYouAssigned);
      

      })
    })


  }
   

  function login() {
    
   
  }

  /*------------------------------------------------------------------------*/

  return (
    <>
        <section class="header1">
          <div className="container">
            <div className="row">
              <div
                className="card col-md-4 offset-md-4 offset-md-4"
                style={{ backgroundColor: "transparent" }}
              ></div>

              <div class="row " style={{ marginTop: "30px" }}>
                <div class="services-col3">
                  <Link to="/users">
                    <img src={users} alt="this is "></img>
                    <h3 style={{ color: "black" }}>
                      <b>User List</b>
                    </h3>
                  </Link>
                </div>

                <div class="services-col3">
                  <Link to="/contact">
                    <img src={career} alt="this is " />
                    <h3 style={{ color: "black", textAlign: "center" }}>
                      {" "}
                      <b>Career</b>
                    </h3>
                  </Link>
                </div>
                </div>

                <div class="row ">
                <div class="services-col3">
                  <Link to="/plans">
                    <img src={packages} alt="this is " />
                    <h3 style={{ color: "black", textAlign: "center" }}>
                      <b>Packages</b>
                    </h3>
                  </Link>
                </div>
                <div class="services-col3">
                  <Link to="/addPlan">
                    <img src={addplan} alt="this is " />
                    <h3 style={{ color: "black", textAlign: "center" }}>
                      <b>Add Package</b>
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="feedback" style={{ marginTop: "10px" }}>
          <div class="row ">
            <div style={{ alignContent: "center" }}>
              <div class="feedback-cal">
                
                <div>
                  { feedback.map(
                    feedback => 
                    <tr key={feedback.id}>
                      <h4>{feedback.yourMassage} </h4>
                      <p>Package :- {feedback.planYouAssigned}</p>
                      <p>- {feedback.userName}</p>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star "></i>
                      <i class="fa fa-star-o "></i>
                      <br></br>
                      <hr></hr>
                      <br></br>
                      
                    </tr>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="jon">
            <Link to="/feedback">
              <button className="btn btn-danger" style={{ marginLeft: "10px" }}>
                Feedback
              </button>
            </Link>
          </div>
        </section>
        </>
  );
}
