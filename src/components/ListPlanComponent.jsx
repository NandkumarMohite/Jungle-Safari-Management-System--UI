
import React, { Component } from 'react'
import PlanService from '../services/PlanService'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


class ListPlanComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      plan: []

    }
  }

  getPlanByID(userId1){
    return axios.get(`http://localhost:8888/getplan/${userId1}`,userId1).then((response, error) => {
        localStorage.setItem("SelectedPlan", JSON.stringify(response.data)) 
        alert("Package Booked succesfully");
        console.log(response)
        

    })}

    

  componentDidMount() {
   

    const user = JSON.parse(localStorage.getItem("user"));
  
    if(user!=null){ 
      PlanService.getPlan().then((res) => {
        this.setState({ plan: res.data });
      });
    }else{
        alert("You Don't have Authority To perfome this Operation Contact Admin")
    }
  }
  render() {
    return (
      <>
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
                                  <a  className='btn btn-hover' onClick={() => this.getPlanByID(plan.packageId)} href="/">
                                    <span style={{color:"white"}}>Book Now</span>
                                  </a>
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
            <div className="p1">
            <td><Link to="/updatePlan" ><button className="btn btn-success" style={{ marginLeft: "52px", marginBottom: "20px" }}>Update</button></Link></td>
            <td><Link to="/deleteplan"><button className="btn btn-danger" style={{ marginLeft: "10px", marginBottom: "20px" }}>Delete</button></Link> </td>
          </div>
          </div>
          </div>
        </>
        )
  }
}
        export default ListPlanComponent