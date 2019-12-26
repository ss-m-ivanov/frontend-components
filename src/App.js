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
import io from 'socket.io-client'


const uri = 'http://localhost:5000';

const Bla = () => {

    let socket = io.connect(uri + '/test');

    socket.on('connect', function () {
        console.log("hello")
    });

    socket.on('message', function (message) {
       console.log(message)
    });


  return(
      <React.Fragment>
          <h4>Your message is here</h4>
      </React.Fragment>
  );
};

// const Notification = (props) => {

    // let socket = socketIOClient("http://127.0.0.1:5000");
    // let socket = io('/test');
    // socket.on('connect', function () {
    //    socket.emit('my_event', {data: "I\`m connected"});
    //    alert("connected")
    // });
    // socket.on('message', function (msg) {
    //     alert("message connected")
    //    console.log(msg)
    // });
    // return (
    //     <React.Fragment>
    //         <h4>Your socket is here</h4>
    //     </React.Fragment>
    // );
// };

const App = () => {

  const [state, setState]= useState({
        userName: '',
        userSurname: '',
        userEmail: '',
        isAuth: false,
        imgUrl: null
    });

    let history = useHistory();

    // useEffect (() => {
    //   axios({ method: 'get',
    //       url: "http://localhost:5000/profile",
    //       withCredentials: true
    //     })
    //       .then(response => {
    //           console.log(response);
    //         setState({userName: response.data.user_first_name, userSurname: response.data.user_last_name,
    //       userEmail: response.data.user_email, imgUrl: response.data.user_image_file, isAuth: true});
    //     })
    //       .catch(error => console.log(error))
    // }, []);

  const activateAuthStatus = () => {
    setState({...state, isAuth: true})
  };

  const deactivateAuthStatus = () => {
    setState({...state, isAuth: false})
  };

  return (
      <div className="h-100">
          <NavigationBar imgUrl={state.imgUrl} isAuth={state.isAuth} deactivateAuthStatus={deactivateAuthStatus} history={history}/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/about" render={() => <About/>}/>
              <Route path="/login" render={() => <Forms type="login" activateAuthStatus={activateAuthStatus} history={history}/>}/>
              <Route path="/register" render={() => <Forms type="register" history={history}/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
              <Route path="/feedback" render={() => <Forms type="feedback"/>}/>
              <Route path="/forgotpassword" render={() => <Forms type="forgotpassword"/>}/>
              <Route path="/profile" render={() => <Profile userName={state.userName} userSurname={state.userSurname} userEmail={state.userEmail} imgUrl={state.imgUrl}/>}/>
              <Route path="/changepassword" render={() => <Forms type="changepassword"/>}/>
              <Route path="/notification" render={() => <Bla/>}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;