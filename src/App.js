import React, { useState, useEffect } from 'react';
import {Route, useHistory} from "react-router-dom";
import { store } from 'react-notifications-component';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import notificationObject from './components/utils/Notification/Notification';
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";
import Profile from "./components/Profile/Profile";
import Forms from "./components/Forms/Forms";
import About from "./components/About/About";
import './App.css';


const App = () => {

  const [state, setState]= useState({
        userName: '',
        userSurname: '',
        userEmail: '',
        isAuth: false,
        imgUrl: null
    });

    let history = useHistory();

    useEffect (() => {
      axios({ method: 'get',
          url: "http://0.0.0.0:80/user-service/api/profile",
          withCredentials: true
        })
          .then(response => {
            setState({userName: response.data.user_first_name, userSurname: response.data.user_last_name,
          userEmail: response.data.user_email, imgUrl: response.data.user_image_file, isAuth: true});
        })
        .catch(error => error)
    }, []);

  const activateAuthStatus = () => {
    setState({...state, isAuth: true})
  }

  const deactivateAuthStatus = () => {
    setState({...state, isAuth: false})
  }

  return (
      <div className="h-100">
          <ReactNotification />
          <NavigationBar imgUrl={state.imgUrl} isAuth={state.isAuth} deactivateAuthStatus={deactivateAuthStatus} history={history}/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/about" render={() => <About/>}/>
              <Route path="/login" render={() => <Forms type="login" activateAuthStatus={activateAuthStatus} history={history}/>}/>
              <Route path="/register" render={() => <Forms type="register" history={history}/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage history={history}/>}/>
              <Route path="/feedback" render={() => <Forms type="feedback"/>}/>
              <Route path="/forgotpassword" render={() => <Forms type="forgotpassword"/>}/>
              <Route path="/profile" render={() => <Profile userName={state.userName} userSurname={state.userSurname} userEmail={state.userEmail} imgUrl={state.imgUrl}/>}/>
              <Route path="/changepassword" render={() => <Forms type="changepassword"/>}/>
          </div>
          <Footer/>

      </div>
  );
};

export default App;
