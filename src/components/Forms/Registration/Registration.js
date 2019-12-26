import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";
import { store } from 'react-notifications-component';
import notificationObject from '../../utils/Notification/Notification';
import axios from "axios";

 const Registration = props => {
    const [state, setState] = useState({
        usernameValue: '',
        usernameValid: false,
        emailValue: '',
        emailValid: false,
        passwordValue: '',
        passwordValid: false,
        confirmPasswordValue: '',
        confirmValid: false,
        userFirstName: '',
        userFirstNameValid: false,
        userLastName: '',
        userLastNameValid: false,
        userImage: '',
        userImageValid: false
    });

    const handleUsernameChange = event => {
        const currentValue = event.target.value;
        const usernameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
        props.drawBorder(event, usernameValid);
        setState(prevState => ({
            ...prevState, usernameValue: currentValue, usernameValid: usernameValid
        }));

    };

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        const emailValid = props.validateValue(currentValue, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
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
    };

    const handleConfirmPasswordChange = event => {
        const currentValue = event.target.value;
        const confirmValid = currentValue === state.passwordValue;
        props.drawBorder(event, confirmValid);
        setState(prevState => ({
            ...prevState, confirmPasswordValue: currentValue, confirmValid: confirmValid
        }));
    };

    const handleUserFisrtNameChange = event => {
        const currentValue = event.target.value;
        const userFirstNameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
        props.drawBorder(event, userFirstNameValid);
        setState(prevState => ({
            ...prevState, userFirstName: currentValue, userFirstNameValid: userFirstNameValid
        }));

    };

    const handleUserLastNameChange = event => {
        const currentValue = event.target.value;
        const userLastNameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
        props.drawBorder(event, userLastNameValid);
        setState(prevState => ({
            ...prevState, userLastName: currentValue, userLastNameValid: userLastNameValid
        }));

    };

    const handleUserImageChange = event => {
        const currentValue = event.target.value;
        const isImageUrl = require('is-image-url');
        const userImageValid = isImageUrl(currentValue);
        props.drawBorder(event, userImageValid);
        setState(prevState => ({
            ...prevState, userImage: currentValue, userImageValid: userImageValid
        }));

    };


    const handleSendData = event => {
        event.preventDefault();
        if (state.usernameValid & state.emailValid & state.passwordValid
            & state.confirmValid & state.userFirstNameValid & state.userLastNameValid & state.userImageValid) {
            axios({ method: 'post',
              url: "http://0.0.0.0:80/profile",
              withCredentials: true,
              data: {user_name: state.usernameValue, user_password: state.passwordValue, user_email: state.emailValue,
              user_first_name: state.userFirstName, user_last_name: state.userLastName, user_image_file: state.userImage}})
              .then(response => {
                props.history.push("/login");
              })
              .catch(error => {
                store.addNotification({
                ...notificationObject,
                title: "Error!",
                message: `${error}`,
                type: "danger",
              });
            })
        } else {
            event.preventDefault();
            store.addNotification({
            ...notificationObject,
            title: "Error!",
            message: `Invalid input data`,
            type: "danger",
          });
        }
    };

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Registration</h2>
          <form className="mb-5 w-75 overflow-auto" onSubmit={handleSendData}>
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

                  <Input
                  type={'user-first-name'}
                  name={'user-first-name-field'}
                  value={state.userFirstName}
                  placeholder={'Enter your first name'}
                  handleChange={handleUserFisrtNameChange}
                  disableSpaces={props.disableSpaces}/>

                  <Input
                  type={'user-last-name'}
                  name={'user-last-name-field'}
                  value={state.userLastName}
                  placeholder={'Enter your last name'}
                  handleChange={handleUserLastNameChange}
                  disableSpaces={props.disableSpaces}/>

                  <Input
                  type={'url'}
                  name={'user-image-field'}
                  value={state.userImage}
                  placeholder={'Enter URL name'}
                  handleChange={handleUserImageChange}
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
