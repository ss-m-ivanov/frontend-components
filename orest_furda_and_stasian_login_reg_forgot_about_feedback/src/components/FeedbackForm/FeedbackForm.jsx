import React from 'react';
import 'react-bootstrap'
import Input from '../Input/Input'
import Button from '../Button/Button'
import TextArea from '../TextArea/TextArea'

class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: '',
            emailValue: '',
            commentValue: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleCommentChange = this.handleCommentChange.bind(this)
        this.handleSendData = this.handleSendData.bind(this)
    }

    validateUsername = username => {

        // user can input numbers letters in any order

        const username_rule = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/

        return username_rule.test(username)
    }

    handleNameChange(e) {
        let currentValue = e.target.value

        this.drawBorder(e, this.validateUsername(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, nameValue: currentValue
        }))
    }

    validateEmail = email => {

        const email_rule = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/

        return email_rule.test(email)
    }

    handleEmailChange(e) {
        let currentValue = e.target.value

        this.drawBorder(e, this.validateEmail(currentValue)) // draws border whether user's email is valid

        this.setState(prevState => ({
            ...prevState, emailValue: currentValue
        }))
    }

    validateComment = comment => {

        const comment_rule = /^.{1,200}$/

        return comment_rule.test(comment)
    }

    handleCommentChange(e) {
        let currentValue = e.target.value

        this.drawBorder(e, this.validateComment(currentValue))
        this.setState(prevState => ({
            ...prevState, commentValue: currentValue
        }))
    }

    handleSendData(e) {

        let name = this.state.nameValue
        let email = this.state.emailValue
        let comment = this.state.commentValue

        if (this.validateEmail(email) && this.validateUsername(name) && this.validateComment(comment)) {
            alert('Data is correct')
        } else {
            e.preventDefault();
        }

    }

    disableSpaces(e) {
        if (e.keyCode === 32) {
            e.preventDefault();
        }
    }

    drawBorder = (event, condition) => {

        // function for drawing border while changing input value

        if (condition) {
            event.target.style.borderBottom = '3px solid #87C540'
        } else {
            event.target.style.borderBottom = '3px solid #d9534f'
        }
    }

    render() {
        return (
            <>
                <h2 id="feedbackHeader">Feedback</h2>
                <form id="feedbackForm" onSubmit={this.handleSendData}>
                    <Input type={'name'}
                        name={'name-field'}
                        value={this.state.nameValue}
                        placeholder={'Enter your name'}
                        handleChange={this.handleNameChange}
                        disableSpaces={this.disableSpaces}
                    /> { /* Input username */}

                    <Input type={'email'}
                        name={'email-field'}
                        value={this.state.emailValue}
                        placeholder={'Enter your email'}
                        handleChange={this.handleEmailChange}
                        disableSpaces={this.disableSpaces}
                    /> { /* Input username */}

                    <TextArea type={'text'}
                        maxLength="20"
                        name={'text-field'}
                        value={this.state.commentValue}
                        placeholder={'Comment'}
                        handleChange={this.handleCommentChange}
                    /> { /* Input username */}

                    <div className="button-div d-flex justify-content-center">
                        <Button
                            id={'send'}
                            value={'Send feedback'}
                        /> {/* Send user data  */}
                    </div>

                </form>
            </>
        );
    }
}

export default FeedbackForm;