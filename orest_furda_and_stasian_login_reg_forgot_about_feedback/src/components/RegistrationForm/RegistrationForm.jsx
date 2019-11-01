import React from 'react'
import 'react-bootstrap'
import Input from '../Input/Input'
import Button from "../Button/Button";

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValue: '',
            usernameErrorMsg: "Min 4 symbols",
            emailValue: '',
            emailErrorMsg: 'Input your correct email',
            passwordValue: '',
            passwordErrorMsg: 'Password should containt 6+ chracters 1 upper-case character and 1 number',
            confirmPasswordValue: '',
            confirmPasswordErrorMsg: 'Confirm your password'
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
        this.handleSendData = this.handleSendData.bind(this)
        this.disableSpaces = this.disableSpaces.bind(this)
    }

    handleUsernameChange(e) {
        let currentValue = e.target.value;
        this.drawBorder(e, this.validateUsername(currentValue))

        this.setState(prevState => ({
            ...prevState, usernameValue: currentValue
        }))

    }

    handleEmailChange(e) {
        let currentValue = e.target.value;
        this.drawBorder(e, this.validateEmail(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, emailValue: currentValue
        }))
    }

    handlePasswordChange(e) {
        let currentValue = e.target.value;
        this.drawBorder(e, this.validatePassword(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, passwordValue: currentValue
        }))
    }

    handleConfirmPasswordChange(e) {
        let currentValue = e.target.value;
        this.drawBorder(e, this.confirmationPassword(currentValue))

        this.setState(prevState => ({
            ...prevState, confirmPasswordValue: currentValue
        }))
    }

    disableSpaces(e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }

    validateUsername = username => {

        // user can input numbers letters in any order

        const username_rule = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

        return username_rule.test(username)
    }



    validateEmail = email => {

        const email_rule = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/

        return email_rule.test(email)
    }

    validatePassword = password => {

        const password_rule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/

        return password_rule.test(password)

    }

    confirmationPassword = confirmPassword_rule => {
        const password_rule = this.state.passwordValue

        return password_rule === confirmPassword_rule
    }

    drawBorder = (event, condition) => {

        // function for drawing border while changing input value

        if (condition) {
            event.target.style.borderBottom = '3px solid #87C540'
        } else {
            event.target.style.borderBottom = '3px solid #d9534f'
        }
    }



    handleSendData(e) {

        let username = this.state.usernameValue
        let email = this.state.emailValue
        let password = this.state.passwordValue
        let confirmPassword = this.state.confirmPasswordValue


        if (this.validatePassword(password) && this.validateEmail(email) && this.validateUsername(username) && this.confirmationPassword(confirmPassword)) {
            alert('Data is correct')
        } else {
            e.preventDefault();
            console.log('Password is invalid')
        }

    }

    render() {
        return (
            <>
                <h2 id='reg-header'>Register</h2>
                <form id='reg-form' className='registration-form' onSubmit={this.handleSendData}>



                    <Input
                        type={'username'}
                        name={'username-field'}
                        // value={this.state.usernameValue}
                        placeholder={'Enter your username'}
                        handleChange={this.handleUsernameChange}
                        errorMessage={this.state.usernameErrorMsg}
                        disableSpaces={this.disableSpaces}
                    /> {/* Input username */}

                    <Input
                        type={'email'}
                        name={'email-field'}
                        value={this.state.emailValue}
                        placeholder={'Enter your email'}
                        handleChange={this.handleEmailChange}
                        errorMessage={this.state.emailErrorMsg}
                        disableSpaces={this.disableSpaces}
                    /> {/* Input email */}

                    <Input
                        type={'password'}
                        name={'password-field'}
                        value={this.state.passwordValue}
                        placeholder={'Enter your password'}
                        handleChange={this.handlePasswordChange}
                        errorMessage={this.state.passwordErrorMsg}
                        disableSpaces={this.disableSpaces}
                    /> {/* Input password */}

                    <Input
                        type={'password'}
                        name={'confirm-password-field'}
                        value={this.state.confirmPasswordValue}
                        placeholder={'Confirm your password'}
                        handleChange={this.handleConfirmPasswordChange}
                        errorMessage={this.state.confirmPasswordErrorMsg}
                        disableSpaces={this.disableSpaces}
                    /> {/* Confirm password */}

                    <div className='button-div'>
                        <Button
                            id={'register'}
                            value={'Sign up'}
                        /> {/* Send data */}
                    </div>
                </form>

            </>
        )
    }
}

export default RegistrationForm;
