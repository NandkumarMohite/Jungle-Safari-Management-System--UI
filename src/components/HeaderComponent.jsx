import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Jungle_Safari_icon from "./pics/Jungle_Safari_icon.jpg";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const Plan = JSON.parse(localStorage.getItem("SelectedPlan"));
  console.log(Plan);
  const Time = JSON.parse(localStorage.getItem("timeSelected"));
  console.log(Time);
  function signOut() {
    alert("Signing off Successfully..!");
    localStorage.clear();

    navigate("/");
  }
  function Booking() {
    if (user.userType == "user") {
      console.log(true);
      navigate("/orders");
    } else if (user.userType == "Admin") {
      navigate("/ordersA");
    }
  }
  function AddToCart() {
    navigate("/addtocart");
  }

  function selector() {
    if (user.userType == "user") {
      console.log(true);
      navigate("/welcomeuser");
    } else{
      navigate("/welcomeadmin");
    }
  }
  return (
    <div>
      <div className="p1">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <img
              src={Jungle_Safari_icon}
              style={{ height: "40px", width: "40px" }}
              alt="this is "
            />
            <Link
              to="/"
              className="navbar-brand"
              style={{ marginLeft: "10px" }}
            >
              Jungle Safari
            </Link>
            <div class="nav-links">
              <ul>
                <li>
                  <a onClick={() => selector()}>Home</a>
                </li>

                <li>
                  <a onClick={() => navigate("/facilities")}>Facilities</a>
                </li>
                <li>
                  <a onClick={() => navigate("/contact")}>Contact Us</a>
                </li>
                
                {user != null && user != "" ? (
                  <>
                    
                    <li >
                      {user.userType!="Admin" ?(
                      <a onClick={() => AddToCart()}> Cart</a>):(
                        <a onClick={() => navigate("/contact/info")}>Career</a>
                      )}
                    </li>
                  
                    <li>
                      <a onClick={() => Booking()}> My Bookings</a>
                    </li>
                    <li>
                      {/* <a href="">{user.firstName}</a> */}
                      <a>Welcome {user.firstName}</a>
                    </li>
                    <li>
                      <a onClick={() => signOut()}> LogOut</a>
                    </li>

                  </>
                ) : (
                  <>
                    <li>
                      <a onClick={() => navigate("/signUp")}>Sign Up</a>
                    </li>
                    <li>
                      <a onClick={() => navigate("/LogIn")}> Log in</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default HeaderComponent;
