import React, { Component } from "react";
import axios from "axios";

class OrdersAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robot: [],
      pkgvalue: null,
      GSTValue: null,
      // date: date,
      //  finalvalue:GSTValue +this.state.pkgvalue
      //    pkgvalue :(this.state.robot.packagefeeIndian*this.state.robot.howManyPeoples),
      // // let
      // GSTValue:(this.state.robot.packagefeeIndian*this.state.robot.howManyPeoples*(0.2)),
      //  finalvalue :(GSTValue + pkgvalue)
    };
    // const finalvalue = ((this.state.robot.packagefeeIndian + (Plan.packagefeeIndian / 10))*robot.howManyPeoples)
    let pkgvalue =
      this.state.robot.packagefeeIndian * this.state.robot.howManyPeoples;
    

  //     var today = new Date(),
  // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let GSTValue =
      this.state.robot.packagefeeIndian * this.state.robot.howManyPeoples * 0.2;
    let finalvalue = GSTValue + pkgvalue;

    
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
   // const id = user.srNo;
    return axios.get(`http://localhost:8888/diplayBookings`).then((result) => {
      this.setState({ robot: result.data });
      this.setState({ GSTValue: result.data.packagefeeIndian });
      //   result.json().then((Response) => {

      // return axios.get(`http://localhost:8888/cartk/${id}`,id).then((response, error) => {
      //     localStorage.setItem("Robot", JSON.stringify(response.data))
      //     console.log(response)
    });
  }

  render() {
    return (
      //className="col-sm-6"
       <> <div >        
        {this.state.robot.map((robot) => (
          <tr key={robot.srNo}>
            <div className="col-md-12" style={{marginLeft:"110%"}}>
              <div className="row" >
                <div className="receipt-main col-xs-12 col-sm-12 col-md-12 col-xs-offset-3 col-sm-offset-0 col-md-offset-0">
                  <div className="row" style={{ textAlign: "center" }}>
                    <div className="receipt-header">
                      <div className="col-xs-12 col-sm-12 col-md-10">
                        <div>
                          <img
                            // className="img-responsive"
                            alt="iamgurdeeposahan"
                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                            style={{ width: 71, borderRadius: 43 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ textAlign: "center" }}>
                    <div className="receipt-header receipt-header-mid">
                      <div className="col-xs-12 col-sm-12 col-md-12 ">
                        <div className="receipt-right">
                          <h5 style={{ color: "black" }}>
                            {robot.firstName} {robot.lastName}
                          </h5>
                          <p>
                            <b>Mobile :</b> {robot.mobileNumber}
                          </p>
                          <p>
                            <b>Email :</b> {robot.emailId}
                          </p>
                          <p>
                            <b>Date of arrival :</b> {robot.dateOfCome}
                          </p>
                          <p>
                            <b>Timeslot selected :</b> {robot.timeSlot}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Description</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-md-9">{robot.packageName}</td>
                          <td className="col-md-3">
                            <i className="fa fa-inr" /> {robot.howManyPeoples * robot.packagefeeIndian}
                          </td>
                        </tr>

                        <tr>
                          <td className="text-right">
                            <p>
                              <strong>Total Amount: </strong>
                            </p>
                            <p>
                              <strong>20% GST: </strong>
                            </p>
                          </td>
                          <td>
                            <p>
                              <strong>
                                <i className="fa fa-inr" />
                                {robot.howManyPeoples * robot.packagefeeIndian}
                              </strong>
                            </p>
                            <p>
                              <strong>
                                <i className="fa fa-inr" />
                                {robot.howManyPeoples *
                                  0.2 *
                                  robot.packagefeeIndian}
                              </strong>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <h2>
                              <strong>Total: </strong>
                            </h2>
                          </td>
                          <td className="text-left text-danger">
                            <h2>
                              <strong>
                                <i className="fa fa-inr" />{" "}
                                {robot.howManyPeoples *
                                  0.2 *
                                  robot.packagefeeIndian +
                                  robot.howManyPeoples * robot.packagefeeIndian}
                              </strong>
                            </h2>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="receipt-header receipt-header-mid receipt-footer">
                      <div className="col-xs-8 col-sm-8 col-md-8 text-left">
                        <div className="receipt-right">
                          <p><b>Date :</b> {this.state.date}  </p>
                          {/* <h5 style={{ color: "rgb(18, 66, 5)" }}>
                            Thanks for booking.!
                          </h5> */}
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-12">
                        <div style={{ color: "black", textAlign: "right" }}>
                          <h1>Stamp</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </tr>
        ))}
        </div>
      </>
      
    );
  }
}
export default OrdersAdmin;
