import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";

 const ChangePassword = props => {
    const [state, setState] = useState({
      currentPasswordValue: '',
      currentPasswordValid: false,
      newPasswordValue: '',
      newPasswordValid: false,
      confirmNewPasswordValue: '',
      confirmNewPasswordValid: false
    });

    const handleCurrentPasswordChange = event => {
        const currentValue = event.target.value;
        const currentPasswordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/);
        props.drawBorder(event, currentPasswordValid);
        setState(prevState => ({
            ...prevState, currentPasswordValue: currentValue, currentPasswordValid: currentPasswordValid
        }));

    }

    const handleNewPasswordChange = event => {
        const currentValue = event.target.value;
        const newPasswordValid = props.validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/);
        props.drawBorder(event, newPasswordValid);
        setState(prevState => ({
            ...prevState, newPasswordValue: currentValue, newPasswordValid: newPasswordValid
        }));
    }

    const handleConfirmNewPasswordChange = event => {
        const currentValue = event.target.value;
        const confirmNewPasswordValid = currentValue === state.newPasswordValue;
        props.drawBorder(event, confirmNewPasswordValid);
        setState(prevState => ({
            ...prevState, confirmNewPasswordValue: currentValue, confirmNewPasswordValid: confirmNewPasswordValid
        }));
    }

    const handleSendData = event => {
        event.preventDefault();
        if (state.currentPasswordValid & state.passwordValid & state.confirmValid) {
            alert('Data is valid');
        }
        else {
            event.preventDefault();
            alert('Data is invalid');
        }
    }

    console.log(state);

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Password change</h2>
          <form className="mb-5" onSubmit={handleSendData}>
              <Input
                type={'password'}
                name={'current-password-field'}
                value={state.currentPasswordValue}
                placeholder={'Enter your current password'}
                handleChange={handleCurrentPasswordChange}
                disableSpaces={props.disableSpaces}/>

                <Input
                  type={'password'}
                  name={'new-password-field'}
                  value={state.newPasswordValue}
                  placeholder={'Enter your new password'}
                  handleChange={handleNewPasswordChange}
                  disableSpaces={props.disableSpaces}/>

                <Input
                  type={'password'}
                  name={'confirm-new-password-field'}
                  value={state.confirmNewPasswordValue}
                  placeholder={'Confirm your new password'}
                  handleChange={handleConfirmNewPasswordChange}
                  disableSpaces={props.disableSpaces}/>

              <div className="text-center">
                  <Button type="submit">Submit</Button>
              </div>
          </form>
          <Alert className="w-75 text-center m-0" variant="success">
            <Alert.Heading>Tips</Alert.Heading>
            <small className="d-block">Password should containt more than 6 characters (1 upper-case character and 1 number)</small>
          </Alert>
      </div>
    );
}


export default ChangePassword;
