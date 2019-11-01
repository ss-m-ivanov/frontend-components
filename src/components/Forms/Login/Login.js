import React from 'react';
import Input from "../../utils/Input/Input";
import Button from "../../utils/Button/Button";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            emailErrorMsg: 'Input your correct email',

            passwordValue: '',
            passwordErrorMsg: 'Password should containt 6+ chracters 1 upper-case character and 1 number'
        }

        this.handleEmailChange    = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
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

    handlePasswordChange (e) {
        let currentValue = e.target.value;

        this.drawBorder(e, this.validatePassword(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, passwordValue: currentValue
        }))
    }

    handleSendData (e) {

        let email    = this.state.emailValue
        let password = this.state.passwordValue


        if (this.validatePassword(password) && this.validateEmail(email)) {
            alert('Data is correct')
        }   else {
            e.preventDefault();
            console.log('Password is invalid')
        }

    }

    disableSpaces (e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }

    validatePassword = password => {

        const password_rule = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/

        return password_rule.test(password)

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

            <div>
                <h2>Login into your account</h2>
                <form id="loginForm" onSubmit={this.handleSendData}>

                    <Input type={'email'}
                           name={'email-field'}
                           value={this.state.emailValue}
                           placeholder={'Enter your email'}
                           handleChange={this.handleEmailChange}
                           errorMessage={this.state.emailErrorMsg}
                           disableSpaces={this.disableSpaces}
                    /> {/* Input user email */}


                    <Input type={'password'}
                           name={'password-field'}
                           value={this.state.passwordValue}
                           placeholder={'Enter your Password'}
                           handleChange={this.handlePasswordChange}
                           errorMessage={this.state.passwordErrorMsg}
                           disableSpaces={this.disableSpaces}
                    /> {/* Input user password */}

                    <Button
                        id={'login'}
                        value={'Login'}
                    /> {/* Send user data */}

                </form>
            </div>
        );
    }
}
export default Login;