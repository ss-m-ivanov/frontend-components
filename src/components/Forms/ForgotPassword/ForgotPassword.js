import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import {Button, Alert} from "react-bootstrap";

 const ForgotPassword = props => {
    const [state, setState] = useState({
      emailValue: '',
      emailValid: false,
    });

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        const emailValid = props.validateValue(currentValue, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        props.drawBorder(event, emailValid);
        setState(prevState => ({
            ...prevState, emailValue: currentValue, emailValid: emailValid
        }));
    };


    const handleSendData = event => {
        event.preventDefault();
        if (state.emailValid) {
            alert('Data is valid');
        }
        else {
            alert('Data is invalid');
        }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Forgot password</h2>
          <form className="mb-5 w-75" onSubmit={handleSendData}>
              <Input
                type={'email'}
                name={'email-field'}
                value={state.emailValue}
                placeholder={'Enter your email'}
                handleChange={handleEmailChange}
                disableSpaces={props.disableSpaces}/>

              <div className="text-center">
                  <Button type="submit">Submit</Button>
              </div>
          </form>
          <Alert className="w-75 text-center m-0" variant="success">
            <Alert.Heading>Tips</Alert.Heading>
            <small className="d-block">Check your email to restore password.</small>
          </Alert>
      </div>
    );
}


export default ForgotPassword;
