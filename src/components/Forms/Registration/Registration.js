import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";

 const Registration = props => {
    const [state, setState] = useState({
      usernameValue: '',
      usernameValid: false,
      emailValue: '',
      emailValid: false,
      passwordValue: '',
      passwordValid: false,
      confirmPasswordValue: '',
      confirmValid: false
    });

    const handleUsernameChange = event => {
        const currentValue = event.target.value;
        const usernameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
        props.drawBorder(event, usernameValid);
        setState(prevState => ({
            ...prevState, usernameValue: currentValue, usernameValid: usernameValid
        }));

    }

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        const emailValid = props.validateValue(currentValue, /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        props.drawBorder(event, emailValid);
        setState(prevState => ({
            ...prevState, emailValue: currentValue, emailValid: emailValid
        }));
    };

    const handlePasswordChange = event => {
        const currentValue = event.target.value;
        const passwordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/);
        props.drawBorder(event, passwordValid);
        setState(prevState => ({
            ...prevState, passwordValue: currentValue, passwordValid: passwordValid
        }));
    }

    const handleConfirmPasswordChange = event => {
        const currentValue = event.target.value;
        const confirmValid = currentValue === state.passwordValue;
        props.drawBorder(event, confirmValid);
        setState(prevState => ({
            ...prevState, confirmPasswordValue: currentValue, confirmValid: confirmValid
        }));
    }

    const handleSendData = event => {
        event.preventDefault();
        if (state.usernameValid & state.emailValid & state.passwordValid & state.confirmValid) {
            alert('Data is valid');
        }
        else {
            event.preventDefault();
            alert('Data is invalid');
        }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Registration</h2>
          <form className="mb-5 w-75" onSubmit={handleSendData}>
              <Input
                type={'username'}
                name={'username-field'}
                value={state.usernameValue}
                placeholder={'Enter your username'}
                handleChange={handleUsernameChange}
                disableSpaces={props.disableSpaces}/>

                <Input
                  type={'email'}
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

                <Input
                  type={'password'}
                  name={'confirm-password-field'}
                  value={state.confirmPasswordValue}
                  placeholder={'Confirm your password'}
                  handleChange={handleConfirmPasswordChange}
                  disableSpaces={props.disableSpaces}/>

              <div className="text-center">
                  <Button type="submit">Submit</Button>
              </div>
          </form>
          <Alert className="w-75 text-center m-0" variant="success">
            <Alert.Heading>Tips</Alert.Heading>
            <small className="d-block">Username should have 4 symbols minimum</small>
            <small className="d-block">Password should containt more than 6 characters (1 upper-case character and 1 number)</small>
          </Alert>
      </div>
    );
}


export default Registration;
