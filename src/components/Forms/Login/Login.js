import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";

 const Login = props => {
    const [state, setState] = useState({
      userNameValue: '',
      userNameValid: false,
      passwordValue: '',
      passwordValid: false
    });

    const handleUserNameChange = event => {
        const currentValue = event.target.value;
        const userNameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)
        props.drawBorder(event, userNameValid);
        setState(prevState => ({
            ...prevState, userNameValue: currentValue, userNameValid: userNameValid
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

    const postData = (userName, userPassword) =>{
        fetch("http://127.0.0.1:5000/login", {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            },
            credentials: 'include',
            body: JSON.stringify(
                {
                    'user_name': userName,
                    'user_password': userPassword
                })

        })
            .then((response) => response.json())
            .then(res => console.log(res))
    };

    const handleSendData = event => {
        event.preventDefault();
        if (state.userNameValid && state.passwordValid) {
            postData(state.userNameValue, state.passwordValue);
        }
        else {
            alert('Data is invalid');
        }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Login</h2>
          <form className="mb-5" onSubmit={handleSendData}>
              <Input
                type={''}
                name={''}
                value={state.userNameValue}
                placeholder={'Enter your username'}
                handleChange={handleUserNameChange}
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
