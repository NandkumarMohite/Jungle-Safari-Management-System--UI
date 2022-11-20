import axios from 'axios';


const USER_API_BASE_URL1="http://localhost:8888/diplayUser"

//signup user
const USER_API_BASE_URL2="http://localhost:8888/addUser"
const USER_API_BASE_URL3="http://localhost:8888/addrobot"


class UserService{
    getUser(){

        return axios.get(USER_API_BASE_URL1);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL2,user);
    }
    createRobot(robot){
        return axios.post(USER_API_BASE_URL3,robot);
    }
    

}
export default new UserService()