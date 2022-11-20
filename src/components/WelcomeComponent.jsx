import React, { Component } from "react";
import FeedbackService from "../services/FeedbackService";
import { Link, useNavigate } from "react-router-dom";
import career from "./pics/career.jpg";
import wall from "./pics/van.jpg";

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
        <section className="header1">
          <div className="sot">
            <div class="text-box">
              <h1 style={{ color: "green", marginTop: "20px", marginLeft:"20px",marginRight:"20px"}}>
                JUNGLE SAFARI
              </h1>
              <p style={{ color: "black", marginTop: "20px", marginLeft:"40px",marginRight:"40px"}}>
                The absolute premier wildlife-viewing experience, Jungle
                Safari offers guests the once-in-a-lifetime opportunity to
                witness the Great Migration up close. The elite tented camp
                moves during the year, in order to follow the migration, and is
                stationed in either the Kelvali or Kaas region. This
                all-inclusive experience is the kind of safari holiday that
                dreams are made of.
              </p>
              <a
                href=" "
                className="hero-botton"
                style={{
                  color: "Black",
                  fontSize: "20px",
                  marginRight: "100px",
                  marginBottom: "50px",
                }}
              >
                <strong>Visite us to Know More</strong>
              </a>

              <div className="container">
                <div className="row">
                  <div class="services-col3">
                    <Link to="/Plan1">
                      <img src={wall} alt="this is " />
                      <h3 style={{ color: "black", textAlign: "center" }}>
                        <b style={{ color: "white", marginLeft: "50px" }}>
                          Packages
                        </b>
                      </h3>
                    </Link>
                  </div>
                  <div class="services-col3" style={{ marginRight: "90px" }}>
                    <Link to="/contact">
                      <img src={career} alt="this is " />
                      <h3 style={{ color: "black", textAlign: "center" }}>
                        {" "}
                        <b style={{ color: "white", marginLeft: "50px" }}>
                          Career
                        </b>
                      </h3>
                    </Link>
                  </div>
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
                  {this.state.feedback.map((feedback) => (
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
