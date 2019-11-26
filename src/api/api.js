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
        console.log("111111")
    },
    logout(){
        return axios({
            method: 'get',
            url: "http://localhost:5000/logout",
            withCredentials: true
        })
            .then(responce => console.log(responce))
    }
};
