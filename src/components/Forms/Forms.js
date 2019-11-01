import React from 'react';
import Login from "./Login/Login";


const Forms = (props) => {

    const formType = {
        'login': <Login/>,
        'register': "piii",
        'feedback': "123"
    };

    return (
        <div className="h-100 d-flex justify-content-center align-items-center violet-frame bg-light">
            <div className="row h-100">
                <div className="col w-50">
                    <img className="w-100 h-100 cover" src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="imge" />
                </div>
                <div className="col w-100 h-100">
                    {
                        formType[props.type]
                    }
                </div>
            </div>
        </div>
    );
};

export default Forms;


