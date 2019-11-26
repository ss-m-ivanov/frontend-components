import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";
import {authAPI} from "../../../api/api";

 const Login = props => {
    const [state, setState] = useState({
      emailValue: '',
      emailValid: false,
      passwordValue: '',
      passwordValid: false
    });

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        //const emailValid = props.validateValue(currentValue, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        props.drawBorder(event, currentValue);
        setState(prevState => ({
            ...prevState, emailValue: currentValue, emailValid: true
        }));
    };

    const handlePasswordChange = event => {
        const currentValue = event.target.value;
        // const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/)

        props.drawBorder(event, currentValue);
        setState(prevState => ({
            ...prevState, passwordValue: currentValue, passwordValid: currentValue
        }))
    };

    const handleSendData = event => {
        event.preventDefault();
        // if (state.emailValid && state.passwordValid) {
        //
        //     alert('Data is valid');
        // }
        // authAPI.login(state.emailValue, state.passwordValue)
        // console.log(state.emailValue, state.passwordValue)
        // else {
        //     alert('Data is invalid');
        // }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Login</h2>
          <form className="mb-5" onSubmit={handleSendData}>
              <Input
                name={'email-field'}
                value={state.emailValue}
                placeholder={'Enter your email'}
                handleChange={handleEmailChange}
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
