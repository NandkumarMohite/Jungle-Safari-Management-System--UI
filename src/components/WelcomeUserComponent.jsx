import React, { Component } from "react";
import FeedbackService from "../services/FeedbackService";
import { Link, useNavigate } from "react-router-dom";
import packages from "./pics/van.jpg";
import career from "./pics/career.jpg";
class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: [],
    };
  }

  componentDidMount() {
    FeedbackService.getFeedback().then((res) => {
      this.setState({ feedback: res.data });
    });
  }
  render() {
    return (
      <>
        <section class="header1">
          <div className="container">
            <div className="row">
              <div
                className="card col-md-4 offset-md-4 offset-md-4"
                style={{ backgroundColor: "transparent" }}
              ></div>

              <div class="row ">
                <div class="services-col3">
                  <Link to="/contact">
                    <img src={career} alt="this is " style={{  marginTop:"150px"}}/>
                    <h3 style={{ color: "black", textAlign: "center", marginTop:"10px",marginLeft:"110px"}}>
                      <b>CAREER</b>
                    </h3>
                  </Link>
                </div>
                <div class="services-col3">
                  <Link to="/PlanUser">
                    <img src={packages} alt="this is " style={{ marginLeft:"30px", marginTop:"150px"}}/>
                    <h3 style={{ color: "black", textAlign: "center", marginTop:"10px",marginRight:"30px"}}>
                      <b>PACKAGES</b>
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="feedback" style={{ marginTop:"10px"}}>
          <div class="row " >
          <div style={{ alignContent:"center"}}>
            <div class="feedback-cal" >
              <div >
                {this.state.feedback.map((feedback) => (
                  <tr key={feedback.id} >
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
                ))}
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
}
export default WelcomeComponent;
