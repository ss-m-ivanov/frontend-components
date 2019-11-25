import axios from 'axios';


export const authAPI = {
    login(user_name, password){
        return axios({ method: 'post',
            url: "http://localhost:5000/login",
            withCredentials: true,
            data: {user_name:user_name, user_password: password}})
            .then(responce => console.log(responce))
    },
    profile() {
        console.log("111111");
        return axios.get("http://localhost:5000/profile")
            .then(responce => console.log(responce))
    },
    logout(){
        return axios.get("http://localhost:5000/logout")
            .then(responce => console.log(responce))
    }
};
