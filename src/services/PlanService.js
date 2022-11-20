import axios from 'axios';
const PLAN_API_BASE_URL1 = "http://localhost:8888/Displayplan";
const PLAN_API_BASE_URL2 = "http://localhost:8888/addplan";

// const PLAN_API_BASE_URL3 = "http://localhost:8888/selectPlan";
const PLAN_API_BASE_URL3 = "http://localhost:8888/selectTimeSlot";
const PLAN_API_BASE_URL4 = "http://localhost:8888/addtocart";
class PlanService{

    getPlan(){
        return axios.get(PLAN_API_BASE_URL1);
    }
    createPlan(plan){
        return axios.post(PLAN_API_BASE_URL2, plan);
    }

    AddToCart(Cart){
        return axios.post(PLAN_API_BASE_URL4, Cart);
    }

    // createTimeSlot(plan){
    //     return axios.post(PLAN_API_BASE_URL3, plan);
    // }

    createTimeSlot(ttimeslot){
        return axios.post(PLAN_API_BASE_URL3, ttimeslot);
    }


}
export default new PlanService()