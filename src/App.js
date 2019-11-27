import React, { useState, useEffect } from 'react';
import {Route, useHistory} from "react-router-dom";
import axios from 'axios';
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";
import Profile from "./components/Profile/Profile";
import Forms from "./components/Forms/Forms";
import About from "./components/About/About";
import './App.css';


const App = () => {

  const [state, setState]= useState({
        userName: null,
        userSurname: null,
        userEmail: null,
        isAuth: false,
        imgUrl: null
    });

    let history = useHistory();

    useEffect (() => {
      axios({ method: 'get',
          url: "http://localhost:5000/profile",
          withCredentials: true
        })
          .then(response => {
            setState({userName: response.user_first_name, userSurname: response.user_last_name,
          userEmail: response.user_email, imgUrl: response.user_image_file});
        })
          .catch(error => console.log(error))
    }, []);

  const activateAuthStatus = () => {
    setState({...state, isAuth: true})
  }

  const deactivateAuthStatus = () => {
    setState({...state, isAuth: false})
  }

  return (
      <div className="h-100">
          <NavigationBar imgUrl={state.imgUrl} isAuth={state.isAuth} deactivateAuthStatus={deactivateAuthStatus} history={history}/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
              <Route path="/login" render={() => <Forms type="login" activateAuthStatus={activateAuthStatus} history={history}/>}/>
              <Route path="/register" render={() => <Forms type="register"/>}/>
              <Route path="/feedback" render={() => <Forms type="feedback"/>}/>
              <Route path="/forgotpassword" render={() => <Forms type="forgotpassword"/>}/>
              <Route path="/profile" render={() => <Profile userName={state.userName} userSurname={state.userSurname} userEmail={state.userEmail} imgUrl={state.imgUrl}/>}/>
              <Route path="/changepassword" render={() => <Forms type="changepassword"/>}/>
              <Route path="/about" render={() => <About/>}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;
