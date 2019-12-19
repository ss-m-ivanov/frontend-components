import React, {useState} from 'react';
import axios from 'axios';
import Input from "../../utils/Input/Input";
import { store } from 'react-notifications-component';
import {Button, Alert} from "react-bootstrap";
import {Redirect} from 'react-router-dom';

 const Login = props => {
    const [state, setState] = useState({
      usernameValue: '',
      usernameValid: false,
      passwordValue: '',
      passwordValid: false
    });

    const handleUsernameChange = event => {
        const currentValue = event.target.value;
        const usernameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
        props.drawBorder(event, usernameValid);
        setState(prevState => ({
            ...prevState, usernameValue: currentValue, usernameValid: usernameValid
        }));
    };

    const handlePasswordChange = event => {
        const currentValue = event.target.value;
        const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)
        props.drawBorder(event, passwordValid);
        setState(prevState => ({
            ...prevState, passwordValue: currentValue, passwordValid: passwordValid
        }))
    };

    const handleSendData = event => {
        event.preventDefault();
        if (state.usernameValid && state.passwordValid) {
          axios({ method: 'post',
              url: "http://0.0.0.0:80/login",
              withCredentials: true,
              data: {user_name: state.usernameValue, user_password: state.passwordValue}})
              .then(response => {
                props.activateAuthStatus();
                props.history.push("/");
              })
              .catch(error => alert(error));
        }
        else {
          store.addNotification({
            title: "Error!",
            message: 'Invalid input data',
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Login</h2>
          <form className="mb-5 w-75" onSubmit={handleSendData}>
              <Input
                type={'text'}
                name={'username-field'}
                value={state.usernameValue}
                placeholder={'Enter your username'}
                handleChange={handleUsernameChange}
                disableSpaces={props.disableSpaces}/>

              <Input
                type={'password'}
                name={'password-field'}
                value={state.passwordValue}
                placeholder={'Enter your password'}
                handleChange={handlePasswordChange}
                disableSpaces={props.disableSpaces}/>

              <div className="text-center">
                  <Button type="submit">Submit</Button>
              </div>
          </form>
          <Alert className="w-75 text-center m-0" variant="success">
            <Alert.Heading>Tips</Alert.Heading>
            <small className="d-block m-2">Forgot password?</small>
            <a href="/forgotpassword">
              <Button>Restore</Button>
            </a>
          </Alert>
      </div>
    );
}


export default Login;
