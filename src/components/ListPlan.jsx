import React, { Component } from "react";
import PlanService from "../services/PlanService";
import { Link } from "react-router-dom";

class ListPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plan: [],
    };
  }


  getPlanByID(id){
   if(id==1){
   
   }
        

    }

  componentDidMount() {
    PlanService.getPlan().then((res) => {
      this.setState({ plan: res.data });
    });
  }
  render() {
    return (
      <div className='section' style={{marginTop:"-80px"}}>
      <div className='planlist'>
        
  
        <div className='container'>
          <div className='pricing'>
            <div className="pricing-header">
              Jung<span className="main-color">l</span>e Packages
            </div>
            <div className="pricing-list">
              <div className='row'>
                {
                  this.state.plan.map(
                    plan =>
                      <tr key={plan.packageId}>
                        <div className="col-4 col-mb-12 col-sm-12">
                          <div className="pricing-box">
                            <div className="pricing-box-header">
                              <div className="pricing-name">
                              Maximum<span className="main-color"> Number Of </span>Peoples = {plan.numberOfPeople}
                              </div>
                              <div className="pricing-price">
                                For In<span className="main-color" style={{fontSize:"25px"}}>di</span>an = {plan.packagefeeIndian}<br></br>
                                For Fore<span className="main-color" style={{fontSize:"25px"}}>i</span>gner = {plan.packagefeeFore}
                              </div>
                            </div>
                            <div className="pricing-box-content">
                              <p style={{fontSize:"50px"}}>{plan.packageName}</p>
                              <p>{plan.description}</p>
                            </div>
                            <div className="pricing-box-action">
                              
                             
                          <a className="btn btn-hover" href="/LogIn"><span style={{color:"white"}}>Book Now</span></a>
                       
                  
                              {/* <a onClick={() => this.getPlanByID(plan.packageId)} >addTocart</a> */}
                            </div>
                          </div>
                        </div>
                      </tr>
                  )
                }

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default ListPlan;
