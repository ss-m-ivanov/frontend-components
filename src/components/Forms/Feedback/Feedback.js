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

    const handleNameChange = event => {
        const currentValue = event.target.value;
        const nameValid = props.validateValue(currentValue, /^(?=.{4,40}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/);
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

    return (
      <div className="h-100 p-3 d-flex justify-content-center align-items-center flex-column">
          <h2>Feedback</h2>
          <form action="https://formspree.io/valentyn17@gmail.com" method="POST" className="w-75">
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
