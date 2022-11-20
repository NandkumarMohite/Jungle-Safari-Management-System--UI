import React, { Component, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import UserService from '../services/UserService';
import axios from "axios";

function DeletePlanComponent() {
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

  // packageId: '1',
  // packageName: '',
  // description: '',
  // packagefeeFore: '',
  // packagefeeIndian: '',
  // numberOfPeople: '',

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
  const delPlan = () => {

   const body = {
    packageId

    }

    // url to call the api 
    const url = `http://localhost:8888/deleteplan/${packageId}`

    // http method: post 
    // body: contains the data to be sent to the API 
    
    axios.delete(url, body).then((response, error) => {
        
      // get the data from the response 
      // const result = response.data 
      console.log(response)
     // console.log(body)
      if (response) {
        console.log("deleted data")
      } else {
        console.log("error")
      }
    })
    // } 
  }


  return (
    <>
    <div className='deletepackage'>     
        <div className='p1' >
      <div className="container" >
            <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "15px" }}>
                <div className="col-sm-0 offset-sm-0">
                  <h1 className='text-center' style={{color:"black" }}>Delete Package</h1>
                  <div className='card-body'>
                    <form>
                      <div className='form-group'>
                        <label style={{color:"black" }}>Package Id:</label>
                        <input type="text" className="form-control" onChange={(e) => setpackageId(e.target.value)} placeholder="Enter package ID to delete Package" />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <br></br>
                        <button button className="btn btn-danger" style={{ marginLeft: "10px" }} onClick={delPlan}>Delete Package<i class="fa fa-pencil-square" style={{ marginLeft: "7px" }} aria-hidden="true"></i></button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
</div>
</div>





<div className='p1'>
<h2 className='text-center' style={{ color: "black" }}><strong><div style={{ border: "2px solid black", width: "15%", textAlign: "center", marginLeft: "42.5%", marginTop: "4px" }}>Package List</div></strong></h2>

            <div className="row">

            <table className="table table-sm table-dark" style={{ width: "90%", marginLeft: "70px" }}>
              <thead>
                <tr>
                  <th>Package Id</th>
                  <th>Package Name</th>
                  <th>Description</th>
                  <th>Charges for Foreigners</th>
                  <th>Charges for Indians</th>
                  <th>Max. No. of Peoples</th>
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
                      </tr>

                  )
                }
              </tbody>
            </table>

            </div>
          </div>
</div>
          
    </>
  );
}
export default DeletePlanComponent;