import React from 'react';
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import Feedback from "./Feedback/Feedback";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ChangePassword from "./ChangePassword/ChangePassword";


const Forms = props => {

  const validateValue = (value, rule) => {
      return rule.test(value);
  }

  const disableSpaces = event => {
      if (event.keyCode === 32) {
          event.preventDefault();
      }
  }

  const drawBorder = (event, condition) => {

      if (condition) {
          event.target.style.borderBottom = '3px solid #87C540';
      }
      else {
          event.target.style.borderBottom = '3px solid #d9534f';

      }
  }

    const formType = {
      'login': <Login validateValue={validateValue} disableSpaces={disableSpaces} drawBorder={drawBorder}/>,
      'register': <Registration validateValue={validateValue} disableSpaces={disableSpaces} drawBorder={drawBorder}/>,
      'feedback': <Feedback validateValue={validateValue} disableSpaces={disableSpaces} drawBorder={drawBorder}/>,
      'forgotpassword': <ForgotPassword validateValue={validateValue} disableSpaces={disableSpaces} drawBorder={drawBorder}/>,
      'changepassword': <ChangePassword validateValue={validateValue} disableSpaces={disableSpaces} drawBorder={drawBorder}/>
    };

    return (
        <div className="h-100 d-flex justify-content-center align-items-center violet-frame bg-light">
            <div className="row h-100">
                <div className="col w-50">
                    <img className="w-100 h-100" src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="statistic-calculation" />
                </div>
                <div className="col w-50 h-100">
                    {
                        formType[props.type]
                    }
                </div>
            </div>
        </div>
    );
};

export default Forms;
