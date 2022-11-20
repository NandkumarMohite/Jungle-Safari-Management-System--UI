
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ListUserComponents from './components/ListUserComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SignUpUserComponent from './components/SignUpUserComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ContactComponent from './components/ContactComponent';
import FeedbackComponent from './components/FeedbackComponent';
import CreatePlanComponent from './components/CreatePlanComponent';
import ListPlanComponent from './components/ListPlanComponent';
import FacilitiesComponent from './components/FacilitiesCompnent';
import InformationComponant from './components/InformationComponant';
import UpdateUserComponent from './components/UpdateUserComponent';

import UpdatePlanComponent from './components/UpdatePlanComponent';
import DeleteUserComponent from './components/DeleteUserComponent';
import DeletePlanComponent from './components/DeletePlanComponent';

import LogInUserComponent from './components/LogInUserComponent';
import WelcomeUserComponent from './components/WelcomeUserComponent';
import WelcomeAdminComponent from './components/WelcomeAdminComponent';
import OrdersAdmin from './components/OrdersAdmin';
import ListPlan from './components/ListPlan';

import Planuser from './components/Planuser';


import SelectcTimeslotComponent from './components/SelectTimeslotComponent';

import AddToCartMain from './components/AddToCartMain';
import Orders from './components/Orders';

function App() {


  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <Routes>
            <Route exact path="/" element={<WelcomeComponent />} ></Route>
          
            <Route exact path="/Users" element={<ListUserComponents />} ></Route>
            <Route exact path="/signUp" element={<SignUpUserComponent />} ></Route>
            <Route exact path="/UpdateUser" element={<UpdateUserComponent />} ></Route>
            <Route exact path="/deleteuser" element={<DeleteUserComponent />} ></Route>
            <Route exact path="/LogIn" element={<LogInUserComponent />} ></Route>
            
            <Route exact path="/Plan1" element={<ListPlan />} ></Route>
            <Route exact path="/PlanUser" element={<Planuser />} ></Route>
            <Route exact path="/welcomeuser" element={<WelcomeUserComponent />} ></Route>
            <Route exact path="/welcomeadmin" element={<WelcomeAdminComponent />} ></Route>
 {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Route exact path="/selecttimeslot" element={<SelectcTimeslotComponent />} ></Route>
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Route exact path="/addPlan" element={<CreatePlanComponent />} ></Route>
            <Route exact path="/updatePlan" element={<UpdatePlanComponent />} ></Route>
            <Route exact path="/Plans" element={<ListPlanComponent />} ></Route>
            <Route exact path="/deleteplan" element={<DeletePlanComponent />} ></Route>
{/* --------------------------------------------------------------------------------------------------------------------------------------------- */}

            <Route exact path="/contact" element={<ContactComponent />} ></Route>
            <Route exact path="/feedback" element={<FeedbackComponent />} ></Route>
            <Route exact path="/facilities" element={<FacilitiesComponent />} ></Route>
           <Route exact path="/contact/info" element={<InformationComponant/>} ></Route> 

{/* ----------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Route exact path="/addtocart" element={<AddToCartMain />} ></Route>
            <Route exact path="/orders" element={<Orders />} ></Route>
            <Route exact path="/ordersA" element={<OrdersAdmin />} ></Route>
          </Routes>
          <FooterComponent />
        </div>
      </Router>
    </div>



  );
}

export default App;
