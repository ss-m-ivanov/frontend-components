import React from 'react';
import JumbotronComponent from "./JumbotronComponent/JumbotronComponent";
import {authAPI} from "../../api/api";


const MainPage = (props) => {
    authAPI.login("Maks", "qwerytodatabase");
    console.log("hello")


    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <main>
                <JumbotronComponent/>
            </main>
        </div>
    );
};

export default MainPage;
