import React, {useState} from 'react';
import axios from 'axios';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";
import {connect} from 'react-redux'

const Login = props => {
    console.log(props);

    const [state, setState] = useState({
        usernameValue: null,
        usernameValid: false,
        passwordValue: null,
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
            axios({
                method: 'post',
                url: "http://localhost:5000/login",
                withCredentials: true,
                data: {user_name: state.usernameValue, user_password: state.passwordValue}
            })
                .then(response => {
                    props.activateAuthStatus();
                    props.history.push("/");
                })
                .catch(error => alert(error));
        }
        else {
            alert('Data is invalid');
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
};

const mapStateToProps = (state) => {
  return {
      usernameValue: state.authentication.usernameValue,
      usernameValid: state.authentication.usernameValid,
      passwordValue: state.authentication.passwordValue,
      passwordValid: state.authentication.passwordValid
  }
};


export default connect(mapStateToProps)(Login);
