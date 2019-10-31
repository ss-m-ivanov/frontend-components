import React from 'react';
import './App.css';
import NavigationBar from "./Components/NaviganationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import JumbotronComponent from "./Components/Jumbotron/JumbotronComponent";


function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <main className="App-header">
                <JumbotronComponent/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
