import React from 'react';
import s from './MainPage.module.css';
import JumbotronComponent from "./Jumbotron/JumbotronComponent";


const MainPage = () => {
    return (
        <div className={s.App}>
            <main className={s.App_header}>
                <JumbotronComponent/>
            </main>
        </div>
    );
};

export default MainPage;
