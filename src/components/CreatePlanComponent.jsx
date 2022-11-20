import React, { Component } from 'react'
import PlanService from '../services/PlanService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


const initialState = {

    packageId: '1',
    packageName: '',
    description: '',
    packagefeeFore: '',
    packagefeeIndian: '',
    numberOfPeople: '',
    
    
    erpackageId: '',
    erpackageName: '',
    erdescription: '',
    erpackagefeeFore: '',
    erpackagefeeIndian: '',
    ernumberOfPeople: '',
    
  

}

class CreatePlanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
        this.changePackageNameHandler = this.changePackageNameHandler.bind(this);
        this.changePackageIdHandler = this.changePackageIdHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePackageFeeForeHandler = this.changePackageFeeForeHandler.bind(this);
        this.changePackageFeeIndianHandler = this.changePackageFeeIndianHandler.bind(this);
        this.changeNumberOfPeopleHandler = this.changeNumberOfPeopleHandler.bind(this);
        this.savePlan = this.savePlan.bind(this);
    }

    validate = () => {
        let erpackageId = '';
        let erpackageName = '';
        let erdescription = '';
        let erpackagefeeFore = '';
        let erpackagefeeIndian = '';
        let ernumberOfPeople = '';

        if (!this.state.packageId) {
            erpackageId = "Plan Id can't be Blank";

        }

        if (!this.state.packageName) {
            erpackageName = "Plan Type can't be Blank";

        }
        if (!this.state.description) {
            erdescription = "Duration can't be Blank";

        }
        if(!this.state.packagefeeFore){
            erpackagefeeFore="Enter the entry Fee for foreigners";
        }
        if(!this.state.packagefeeIndian){
            erpackagefeeIndian="Enter the entry Fee for Indians";
        }
        if(!this.state.numberOfPeople){
            ernumberOfPeople="Enter maximum number of peoples";
        }
 

        if (erpackageId) {
            this.setState({ erpackageId });
            return false;

        }
        if (erpackageName) {
            this.setState({ erpackageName });
            return false;

        }

        if (erdescription) {
            this.setState({ erdescription });
            return false;

        }
        if(erpackagefeeFore){
          this.setState({erpackagefeeFore});
          return false;

        }
        if(erpackagefeeIndian){
            this.setState({erpackagefeeIndian});
            return false;
  
        }
        if(ernumberOfPeople){
            this.setState({ernumberOfPeople});
            return false;
        }

        return true;
    };


    savePlan = (p) => {
        p.preventDefault();
        const isValid=this.validate();
        if(isValid){
        let plan = { packageId: this.state.packageId, packageName: this.state.packageName, description: this.state.description, packagefeeFore: this.state.packagefeeFore, packagefeeIndian: this.state.packagefeeIndian, numberOfPeople: this.state.numberOfPeople };
        console.log('plan => ' + JSON.stringify(plan));
        
        const user = JSON.parse(localStorage.getItem("user"));
        if(user.userType=="Admin"){
            alert("Plan added succesfully");
            PlanService.createPlan(plan).then(Response => {
                this.setState(initialState);
            });
           
        }else{
            alert("You Don't have Authority To perfome this Operation Contact Admin")
        }
       
    }
    }
    changePackageNameHandler = (event) => {
        this.setState({ packageName: event.target.value });
    }

    changePackageIdHandler = (event) => {
        this.setState({ packageId: event.target.value });
    }

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }

    changePackageFeeForeHandler = (event) => {
        this.setState({ packagefeeFore: event.target.value });
    }

    changePackageFeeIndianHandler = (event) => {
        this.setState({ packagefeeIndian: event.target.value });
    }

    changeNumberOfPeopleHandler = (event) => {
        this.setState({ numberOfPeople: event.target.value });
    }
 
    
    cancel() {
        this.props.History.push('/');
    }
    render() {
        return (
            <div className='planadd'>
                <div className='p1'>
                    <br></br>
                    <div className="container">
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3" style={{ backgroundColor: "transparent" }}>
                                {/* {
                                    this.getTitle()
                                } */}
                                <h1 className="text-center" style={{ color: "white" }}>ADD PLAN</h1>
                                <div className="card-body">
                                    <form className="form-inside-input"
                                        savePlan={this.savePlan}
                                        noValidate>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Package Name: </label>
                                            <input placeholder="Package Name" name="packageName" className="form-control"
                                            value={this.state.packageName} onChange={this.changePackageNameHandler} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                 {this.state.erpackageName}
                                                </div>
                                        </div>
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Package Id: </label>
                                            <input placeholder="Package Id" name="packageId" className="form-control"
                                                value={this.state.packageId} onChange={this.changePackageIdHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                   {this.state.erpackageId}
                                                </div>
                                        </div>
                                        
                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control"
                                                value={this.state.description} onChange={this.changeDescriptionHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erdescription}
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Package Fee for Foreigns: </label>
                                            <input placeholder="package fee for Foreigns" name="packagefeeFore" className="form-control"
                                                value={this.state.packagefeeFore} onChange={this.changePackageFeeForeHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erpackagefeeFore}
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Package Fee for Indians: </label>
                                            <input placeholder="Package fee for Indians" name="packagefeeIndian" className="form-control"
                                                value={this.state.packagefeeIndian} onChange={this.changePackageFeeIndianHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.erpackagefeeIndian}
                                            </div>
                                        </div>

                                        <div className="form-group" style={{ color: "white" }}>
                                            <label> Maximum number Of Peoples: </label>
                                            <input placeholder="Maximum number Of Peoples" name="numberOfPeople" className="form-control"
                                                value={this.state.numberOfPeople} onChange={this.changeNumberOfPeopleHandler} />
                                                <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.ernumberOfPeople}
                                            </div>
                                        </div>

                                        <br></br>
                                        <button className="btn btn-success" onClick={this.savePlan}>Save</button>
                                        <Link to="/" ><button className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</button></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePlanComponent