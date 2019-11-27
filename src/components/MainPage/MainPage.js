import React from 'react';
import JumbotronComponent from "./JumbotronComponent/JumbotronComponent";


const MainPage = (props) => {

    return (
        <div className="h-100 d-flex justify-content-center align-items-center">
            <main>
                <JumbotronComponent/>
            </main>
        </div>
    );
};

export default MainPage;
