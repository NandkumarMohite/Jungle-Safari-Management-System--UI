import React from "react";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";


function AddToCartMain() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const Plan = JSON.parse(localStorage.getItem("SelectedPlan"));
  console.log(Plan);
  const Time = JSON.parse(localStorage.getItem("timeSelected"));
  console.log(Time);

  // const finalvalue = ((Plan.packagefeeIndian + (Plan.packagefeeIndian / 20))*Time.howManyPeoples)
  const finalvalue =
    Plan.packagefeeIndian * Time.howManyPeoples +
    Plan.packagefeeIndian * Time.howManyPeoples * 0.2;
  function saveUser() {
    let robot = {
      srNo: user.srNo,
      firstName: user.firstName,
      lastName: user.lastName,
      emailId: user.emailId,
      mobileNumber: user.mobileNumber,
      packageId: Plan.packageId,
      packageName: Plan.packageName,
      numberOfPeople: Plan.numberOfPeople,
      howManyPeoples: Time.howManyPeoples,
      dateOfCome: Time.dateOfCome,
      timeSlot: Time.timeSlot,
    };
    console.log("robot=>" + JSON.stringify(robot));

    UserService.createRobot(robot).then((Response) => {});
  }

  return (
    <>
      <div className="container">
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="row">
            <div className="col-md-9">
              <div className="ibox">
                <div className="ibox-title">
                  <span className="pull-right" style={{ color: "black" }}>
                    (<strong>1</strong>) Package
                  </span>
                  <h5 style={{ color: "black" }}>
                    Package you have selected..
                  </h5>
                </div>
                <div className="ibox-content">
                  <div className="table-responsive">
                    <table className="table shoping-cart-table">
                      <tbody>
                        <tr>
                          <td width={90}>
                            <div className="cart-product-imitation"></div>
                          </td>
                          
                          <td className="desc">
                            <h3>
                              <a href="#" className="text-navy">
                                {Plan.packageName}
                              </a>
                            </h3>
                            <dt>Description Of Package</dt>
                            <p className="small">{Plan.description}</p>
                          </td>
                          <td>
                            <h2 className="small text">No. of Peoples</h2>
                          </td>
                          <td width={65}>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={Time.howManyPeoples}
                            />
                          </td>
                          <td>
                            <h4 style={{ color: "black" }}>
                              <i class="fa fa-inr"></i>{" "}
                              {Plan.packagefeeIndian * Time.howManyPeoples}
                            </h4>

                            <h4 style={{ color: "black" }}> + 20% GST</h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="ibox-content">
                  <Link to="/PlanUser">
                    {" "}
                    <button
                      className="btn btn-primary pull-right"
                      href="/PlanUser"
                    >
                      <i className="fa fa-arrow-left" /> Change Selected
                      Package
                    </button>
                  </Link>

                  {/* <Link to="/PlanUser">
                    <button className="btn btn-white">
                      <i className="fa fa-arrow-left" /> Change Selected
                      Package
                    </button>
                  </Link>*/}
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ color: "black" }}>
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Package Summary</h5>
                </div>
                <div className="ibox-content">
                  <span>Total</span>
                  <h2 className="font-bold">
                    <i class="fa fa-inr"></i> {finalvalue}
                  </h2>
                  <hr />
                  <span className="text-muted small">
                    *For India, applicable sales tax will be applied
                  </span>
                  <div className="m-t-sm">
                    <div className="btn-group">
                      <a
                        href="/orders"
                        className="btn btn-primary btn-sm"
                        onClick={saveUser()}
                      >
                        <i className="fa fa-shopping-cart" /> Pay
                      </a>
                      <a href="#" className="btn btn-white btn-sm">
                        {" "}
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ibox">
                <div className="ibox-title">
                  <h5>Support</h5>
                </div>
                <div className="ibox-content text-center">
                  <h3>
                    <i className="fa fa-phone" /> 8530868776
                  </h3>
                  <span className="small">
                    Please contact with us if you have any queries. We are
                    avalible 24h.
                  </span>
                </div>
              </div>
              <div className="ibox"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddToCartMain;
