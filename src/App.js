import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";
import './App.css';


const App = () => {

  return (
      <div className="h-100">
          <NavigationBar/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
              <Route path="/about" render={() => {return(<p>About</p>)}}/>
              <Route path="/login" render={() => {return(<p>Login</p>)}}/>
              <Route path="/register" render={() => {return(<p>Register</p>)}}/>
              <Route path="/logout" render={() => {return(<p>You are logged out</p>)}}/>
              <Route path="/feedback" render={() => {return(<p>Feedback</p>)}}/>
              <Route path="/profile" render={() => {return(<p>Profile</p>)}}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;
