import React, { Component, useEffect, useState } from 'react'
//import { useNavigate } from "react-router-dom"
import PlanService from '../services/PlanService';
import { Link, useLocation, useNavigate } from "react-router-dom";



function UpdatePlanComponent() {
  const navigate = useNavigate();
  const [packageId, setpackageId] = useState("")
  const [plan, setPlan] = useState([])
  const [packageName, setpackageName] = useState('');
  const [description, setdescription] = useState('');
  const [packagefeeFore, setpackagefeeFore] = useState('');
  const [packagefeeIndian, setpackagefeeIndian] = useState('');
  const [numberOfPeople, setnumberOfPeople] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user==null){
      navigate("/pageNotFound");
      window.location.reload(true);
    }
    if(user.userType=="Admin"){
       
        console.log(user.userType)
        getPlan();
       
    }else{
        
      
        navigate("/pageNotFound")
    }
    
  }, [])


  function getPlan() {

    fetch("http://localhost:8888/Displayplan").then((result) => {
      result.json().then((Response) => {

        setPlan(Response)
        setpackageId(Response[0].packageId)
        setpackageName(Response[0].packageName)
        setdescription(Response[0].description)
        setpackagefeeFore(Response[0].packagefeeFore)
        setpackagefeeIndian(Response[0].packagefeeIndian)
        setnumberOfPeople(Response[0].numberOfPeople)

      })
    })


  }
  function selectPlan(srNo) {

    console.warn(plan[srNo - 1]);
    let item = plan[srNo - 1];
    setpackageId(item.packageId)
    setpackageName(item.packageName)
    setdescription(item.description)
    setpackagefeeFore(item.packagefeeFore)
    setpackagefeeIndian(item.packagefeeIndian)
    setnumberOfPeople(item.numberOfPeople)



  }
  function updatePlan() {
    let plan = { packageId, packageName, description, packagefeeFore, packagefeeIndian, numberOfPeople}



    console.log('plan=>' + JSON.stringify(plan));
    alert("Plan updated succesfully");
    PlanService.createPlan(plan).then(Response => {

    });

  }



  return (
    <>
      <div className='updateplan'>
        <div className='p1'>
          <br></br>
          <div className="container">
            <div className='row'>
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h1 className='text-center'style={{color:"black"}}>Package Updating Form</h1>
                <div className='card-body'>

                  <form style={{color:"black"}}>
                    <div className='form-group'>
                      <label>Sr No:</label>
                      <input placeholder="Sr No" className="form-control" value={packageId} />
                    </div>
                    <div>
                      <div className='form-group'>
                        <label>Package Name:</label>
                        <input placeholder="Package Name" className="form-control" value={packageName} onChange={(e) => setpackageName(e.target.value)} />
                      </div>

                      <div className='form-group'>
                        <label>Description:</label>
                        <input placeholder="Description" className="form-control" value={description} onChange={(e) => setdescription(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Package Fee for Foreigners:</label>
                        <input placeholder="Package Fee for Foreigners" className="form-control" value={packagefeeFore} onChange={(e) => setpackagefeeFore(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Package Fee for Indians:</label>
                        <input placeholder="package fee for Indians" className="form-control" value={packagefeeIndian} onChange={(e) => setpackagefeeIndian(e.target.value)} />
                      </div>
                      <div className='form-group'>
                        <label>Maximum Number Of Peoples:</label>
                        <input placeholder="Maximum Number Of Peoples" className="form-control" value={numberOfPeople} onChange={(e) => setnumberOfPeople(e.target.value)} />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-warning" style={{ marginLeft: "10px" }} onClick={updatePlan}>Update Plan<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='p1'>
            <h2 className='text-center' style={{ color: "white" }}><strong><div style={{ border: "2px solid #ffffffe5", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>Package List</div></strong></h2>

            <div className="row">

              <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>

<thead>
                <tr>
                  <th>Package Id</th>
                  <th>Package Name</th>
                  <th>Description</th>
                  <th>Foreigner charge</th>
                  <th>Indian Charge</th>
                  <th>Max No.Of Peoples</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  plan.map(
                    plan =>
                      <tr key={plan.packageId}>
                        <td>{plan.packageId}</td>
                        <td>{plan.packageName}</td>
                        <td>{plan.description}</td>
                        <td>{plan.packagefeeFore}</td>
                        <td>{plan.packagefeeIndian}</td>
                        <td>{plan.numberOfPeople}</td>
                        <td><button className="btn btn-warning" onClick={() => selectPlan(plan.packageId)}>Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
                      </tr>

                  )
                }
              </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default UpdatePlanComponent