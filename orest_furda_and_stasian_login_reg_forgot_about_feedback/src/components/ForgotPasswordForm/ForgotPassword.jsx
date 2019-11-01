import React from 'react';

import Input from '../Input/Input'
import Button from '../Button/Button'

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            emailErrorMsg: 'Input your correct email',
        
        }

        this.handleEmailChange    = this.handleEmailChange.bind(this)
        
        this.handleSendData       = this.handleSendData.bind(this)
        this.disableSpaces        = this.disableSpaces.bind(this)
    }

    handleEmailChange (e) {
        let currentValue = e.target.value

        this.drawBorder(e, this.validateEmail(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, emailValue: currentValue
        }))
    }

   

    handleSendData (e) {

        let email    = this.state.emailValue


        if (this.validateEmail(email)) {
            alert('Data is correct')
        }   else {
            e.preventDefault();
        }
        
    }

    disableSpaces (e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }

  

    validateEmail = email => {
        
        const email_rule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        return email_rule.test(email)

    }

    drawBorder = (event, condition) => {

        // function for drawing border while changing input value

    
        if (condition) {
            event.target.style.borderBottom = '3px solid #87C540'
        }   else {
            event.target.style.borderBottom = '3px solid #d9534f'
        }
    }

    

    

    
    render () {
        return (
            <>
                

                    
                <h2 id="loginHeader">Forgot Password</h2>
                <form id="loginForm" onSubmit={this.handleSendData}>
            
                    <Input type={'email'}
                        name={'email-field'}
                        value={this.state.emailValue}
                        placeholder={'Enter your email'}
                        handleChange={this.handleEmailChange}
                        errorMessage={this.state.emailErrorMsg}
                        disableSpaces={this.disableSpaces}
                    /> {/* Input user email */}

                    <Button 
                        id={'login'}
                        value={'Get Password'}
                    /> {/* Send user data  */ }
                    
                </form>
                    
            </>
        );
    }
}

export default ForgotPassword;