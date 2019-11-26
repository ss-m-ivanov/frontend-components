import React from 'react';
import JumbotronComponent from "./JumbotronComponent/JumbotronComponent";
import {authAPI} from "../../api/api";


const MainPage = (props) => {
    // authAPI.logout();
    // console.log("logouted")
    // // authAPI.login("Maks", "qwerytodatabase");
    //
    // // authAPI.profile();
    // //window.location.replace("http://localhost:3000/history");
    // console.log("hello");


    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <main>
                <JumbotronComponent/>
            </main>
        </div>
    );
};

export default MainPage;
