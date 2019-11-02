import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";
import Profile from "./components/Profile/Profile";
import './App.css';
import Forms from "./components/Forms/Forms";


const App = () => {

  return (
      <div className="h-100">
          <NavigationBar/>
          <div className="content-section">
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
              <Route path="/login" render={() => <Forms type="login"/>}/>
              <Route path="/register" render={() => <Forms type="register"/>}/>
              <Route path="/feedback" render={() => <Forms type="feedback"/>}/>
              <Route path="/forgotpassword" render={() => <Forms type="forgotpassword"/>}/>
              <Route path="/profile" render={() => <Profile/>}/>
              <Route path="/about" render={() => {return(<p>About</p>)}}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;
