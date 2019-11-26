import React, {useState} from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";
import Profile from "./components/Profile/Profile";
import Forms from "./components/Forms/Forms";
import About from "./components/About/About";
import './App.css';
import {authAPI} from "./api/api";
import axios from "axios";



const App = () => {
    let [state, setState]= useState({
        name: null,
        surname: null,
        email: null,
        isAuth: false,
        imgUrl: null
    });

    authAPI.login("Maks", "qwerytodatabase");

    const profile = () => {
        return axios({method: 'get',
            url: "http://localhost:5000/profile",
            withCredentials: true
        })
            .then(responce => setState({name: responce.data.user_name, isAuth: true}))
            .catch(error => console.log(error.response))
    };

    profile();

  return (
      <div className="h-100">
          <NavigationBar imgUrl={state.imgUrl} isAuth={state.isAuth}/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
              <Route path="/login" render={() => <Forms type="login"/>}/>
              <Route path="/register" render={() => <Forms type="register"/>}/>
              <Route path="/feedback" render={() => <Forms type="feedback"/>}/>
              <Route path="/forgotpassword" render={() => <Forms type="forgotpassword"/>}/>
              <Route path="/profile" render={() => <Profile/>}/>
              <Route path="/changepassword" render={() => <Forms type="changepassword"/>}/>
              <Route path="/about" render={() => <About/>}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;
