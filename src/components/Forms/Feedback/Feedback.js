import React, {useState} from 'react';
import Input from "../../utils/Input/Input";
import TextArea from "../../utils/TextArea/TextArea";
import {Button} from "react-bootstrap";

 const Feedback = props => {
    const [state, setState] = useState({
      nameValue: '',
      nameValid: false,
      emailValue: '',
      emailValid: false,
      commentValue: '',
      commentValid: false
    });

    console.log(state);

    const handleNameChange = event => {
        const currentValue = event.target.value;
        const nameValid = props.validateValue(currentValue, /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
        props.drawBorder(event, nameValid);
        setState(prevState => ({
            ...prevState, nameValue: currentValue, nameValid: nameValid
        }))
    };

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        const emailValid = props.validateValue(currentValue, /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
        props.drawBorder(event, emailValid);
        setState(prevState => ({
            ...prevState, emailValue: currentValue, emailValid: emailValid
        }));
    };

    const handleCommentChange = event => {
        const currentValue = event.target.value
        const commentValid = props.validateValue(currentValue, /^.{1,200}$/);
        props.drawBorder(event, commentValid);
        setState(prevState => ({
            ...prevState, commentValue: currentValue, commentValid: commentValid
        }))
    }

    const handleSendData = event => {
        event.preventDefault();
        if (state.nameValid && state.emailValid && state.commentValid) {
            alert('Data is valid');
        }
        else {
            alert('Data is invalid');
        }
    }

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Feedback</h2>
          <form onSubmit={handleSendData}>
            <Input
                type={'name'}
                name={'name-field'}
                value={state.nameValue}
                placeholder={'Enter your name'}
                handleChange={handleNameChange}
                disableSpaces={props.disableSpaces}/>

            <Input
                type={'email'}
                name={'email-field'}
                value={state.emailValue}
                placeholder={'Enter your email'}
                handleChange={handleEmailChange}
                disableSpaces={props.disableSpaces}/>

            <TextArea
                type={'text'}
                name={'text-field'}
                value={state.commentValue}
                placeholder={'Comment'}
                handleChange={handleCommentChange}/>

              <div className="text-center">
                  <Button type="submit">Submit</Button>
              </div>

          </form>
      </div>
    );
}


export default Feedback;
