import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./components/main_page/MainPage";
import NavigationBar from "./components/NaviganationBar/NavigationBar";
import Footer from "./components/Footer/Footer";
import History from "./components/History/History";
import FilePage from "./components/Filter/FilePage";


const App = () => {
  return (
      <div>
          <NavigationBar/>
          <div>
              <Route path="/" exact render={() => <MainPage/>}/>
              <Route path="/history" render={() => <History/>}/>
              <Route path="/filter" render={() => <FilePage/>}/>
          </div>
          <Footer/>
      </div>
  );
};

export default App;
