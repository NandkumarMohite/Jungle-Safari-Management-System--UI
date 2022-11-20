import React, { Component } from "react";
import PlanService from "../services/PlanService";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {
  srNo: "1",
  howManyPeoples: "",
  dateOfCome: "",
  timeSlot: "",

  ersrNo: "",
  erhowManyPeoples: "",
  erdateOfCome: "",
  ertimeSlot: "",
};

class SelectTimeslotComponent extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
    this.changeHowManyPeoplesHandler =
      this.changeHowManyPeoplesHandler.bind(this);
    this.changeDateOfComeHandler = this.changeDateOfComeHandler.bind(this);
    this.changeTimeSlotHandler = this.changeTimeSlotHandler.bind(this);

    this.savePlan = this.savePlan.bind(this);
    this.Cart = this.Cart.bind(this);
  }

  validate = () => {
    let erhowManyPeoples = "";
    let erdateOfCome = "";
    let ertimeSlot = "";

    if (!this.state.howManyPeoples) {
      erhowManyPeoples = "please insert something";
    }
    if (!this.state.dateOfCome) {
      erdateOfCome = "please insert something";
    }
    if (!this.state.timeSlot) {
      ertimeSlot = "please select Time-slot";
    }

    if (erhowManyPeoples) {
      this.setState({ erhowManyPeoples });
      return false;
    }
    if (erdateOfCome) {
      this.setState({ erdateOfCome });
      return false;
    }

    if (ertimeSlot) {
      this.setState({ ertimeSlot });
      return false;
    }

    return true;
  };

 

  savePlan = (p) => {
    
    

    p.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const Plan = JSON.parse(localStorage.getItem("SelectedPlan"));
    console.log(Plan);
    const isValid = this.validate();
    if (isValid) {

      
      let ttimeslot = {
        srNo: user.srNo,
        howManyPeoples: this.state.howManyPeoples,
        dateOfCome: this.state.dateOfCome,
        timeSlot: this.state.timeSlot,
      };
      console.log("timeslot => " + JSON.stringify(ttimeslot));

      PlanService.createTimeSlot(ttimeslot).then((Response) => {
        this.setState(initialState);
        alert("Plan added succesfully");
      });

      return axios
        .get(`http://localhost:8888/selectPlan2/${user.srNo}`, user.srNo)
        .then((response, error) => {
          localStorage.setItem("timeSelected", JSON.stringify(response.data));
          console.log(response);
        });

        
    }
    
    // const Time = JSON.parse(localStorage.getItem("timeSelected"));
    //     console.log(Time);
    //     let Cart = {
    //       srNo: user.srNo,
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //       emailId: user.emailId,
    //       mobileNumber: user.mobileNumber,
    //       dateOfBirth: user.dateOfBirth,
    //       city: user.city,
    //       gender: user.gender,
    //       nationality: user.nationality,
    //       packageId: Plan.packageId,
    //       description: Plan.description,
    //       packageName: Plan.packageName,
    //       packagefeeIndian: Plan.packagefeeIndian,
    //       packagefeeFore: Plan.packagefeeFore,
    //       numberOfPeople: Plan.numberOfPeople,
    //       howManyPeoples: Time.howManyPeoples,
    //       dateOfCome: Time.dateOfCome,
    //       timeSlot: Time.timeSlot,
    //     };
    //     console.log("cart => " + JSON.stringify(Cart));
    //     PlanService.AddToCart(Cart).then((Response) => {
    //       // alert("Plan added succesfully");
    //     });

    //     return axios
    //     .get(`http://localhost:8888/cartk`)
    //     .then((response, error) => {
    //       localStorage.setItem("Cart", JSON.stringify(response.data));
    //       console.log(response);
    //     });
  };

  changeHowManyPeoplesHandler = (event) => {
    this.setState({ howManyPeoples: event.target.value });
  };

  changeDateOfComeHandler = (event) => {
    this.setState({ dateOfCome: event.target.value });
  };

  changeTimeSlotHandler = (event) => {
    this.setState({ timeSlot: event.target.value });
  };

  cancel() {
    this.props.History.push("/");
  }

  Cart= (p) =>{
    p.preventDefault();
    const Time = JSON.parse(localStorage.getItem("timeSelected"));
    const user = JSON.parse(localStorage.getItem("user"));
    const Plan = JSON.parse(localStorage.getItem("SelectedPlan"));
    console.log(Plan);
    console.log(Time);
    console.log(user);
    let Cart = {
      srNo: user.srNo,
      firstName: user.firstName,
      lastName: user.lastName,
      emailId: user.emailId,
      mobileNumber: user.mobileNumber,
      dateOfBirth: user.dateOfBirth,
      city: user.city,
      gender: user.gender,
      nationality: user.nationality,
      packageId: Plan.packageId,
      description: Plan.description,
      packageName: Plan.packageName,
      packagefeeIndian: Plan.packagefeeIndian,
      packagefeeFore: Plan.packagefeeFore,
      numberOfPeople: Plan.numberOfPeople,
      howManyPeoples: Time.howManyPeoples,
      dateOfCome: Time.dateOfCome,
      timeSlot: Time.timeSlot,
    };
    console.log("cart => " + JSON.stringify(Cart));
    //to add plan in db
    PlanService.AddToCart(Cart).then((Response) => {
     
    });

    //specific plan associated with that user will be retrieved and stored on L.S with key "Cart"
    return axios
    .get(`http://localhost:8888/cartk/${user.srNo}`, user.srNo)
    .then((response, error) => {
      localStorage.setItem("Cart", JSON.stringify(response.data));
      console.log(response);
    });
  }
  render() {
    return (
      <div className="planadd">
        <div className="p1">
          <br></br>
          <div className="container">
            <div className="row">
              <div
                className="card col-md-6 offset-md-3 offset-md-3"
                style={{ backgroundColor: "transparent" }}
              >
                <h1 className="text-center" style={{ color: "white" }}>
                  TIMESLOT SELECTION
                </h1>
                <div className="card-body">
                  <form
                    className="form-inside-input"
                    savePlan={this.savePlan}
                    noValidate
                  >
                    <div className="form-group" style={{ color: "white" }}>
                      <label> Number Of Peoples: </label>
                      <input
                        placeholder="Number Of Peoples"
                        name="howManyPeoples"
                        className="form-control"
                        value={this.state.howManyPeoples}
                        onChange={this.changeHowManyPeoplesHandler}
                      />
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.erhowManyPeoples}
                      </div>
                    </div>
                    <div className="form-group" style={{ color: "white" }}>
                      <label> Date: </label>
                      <input
                        type="date"
                        placeholder="Date"
                        name="DateOfCome"
                        className="form-control"
                        value={this.state.dateOfCome}
                        onChange={this.changeDateOfComeHandler}
                      />
                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.erdateOfCome}
                      </div>
                    </div>

                    <div className="form-group" style={{ color: "white" }}>
                      <label>Timeslot:</label>
                      <select
                        name="Timeslot"
                        id="Timeslot"
                        className="form-control"
                        value={this.state.timeSlot}
                        onChange={this.changeTimeSlotHandler}
                      >
                        <option>Select Time-slot</option>
                        <option value="10:00 PM-12:00 PM">
                          10:00 AM-12:00 PM
                        </option>
                        <option value="12:00 PM-02:00 PM">
                          12:00 PM-02:00 PM
                        </option>
                        <option value="12:00 PM-02:00 PM">
                          03:00 PM-05:00 PM
                        </option>
                      </select>

                      <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.ertimeSlot}
                      </div>
                    </div>

                    <br></br>
                    <button className="btn btn-success" onClick={this.savePlan}>
                      Save
                    </button>
                    <button className="btn btn-warning" style={{marginLeft:"10px"}} onClick={this.Cart}>
                      Add to cart
                    </button>
                    <Link to="/">
                      <button
                        className="btn btn-danger"
                        style={{ marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTimeslotComponent;
