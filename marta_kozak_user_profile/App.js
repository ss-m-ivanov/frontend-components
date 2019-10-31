import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css'
import Avatar from './components/Avatar'
import Line from './components/Line'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';



class UserProfile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false,
            setShow: false,
            changeName:"",
            changeSurname:"",
            changeEmail:"",
            userName:"John",
            userSurname:"Johnson",
            userEmail:"john.johnson@gmail.com"
        }
        this.handleChangeName=this.handleChangeName.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state.changeName=this.state.userName
        this.state.changeSurname=this.state.userSurname
        this.state.changeEmail=this.state.userEmail


    }

    handleClose = () => {
        this.setState(prevState => ({
            ...prevState, show: false
        }))
    };

    handleShow  = () => {
        this.setState(prevState => ({
            ...prevState, show: true
        }))
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({userName:this.state.changeName})
        this.setState({userSurname:this.state.changeSurname})
        this.setState({userEmail:this.state.changeEmail})
    }
    handleChangeName=event=>{
        this.setState({changeName:event.target.value})
    }

    handleChangeSurname=event=>{
        this.setState({changeSurname:event.target.value})
    }

    handleChangeEmail=event=>{
        this.setState({changeEmail:event.target.value})
    }
    rectangle ={
        backgroundColor: '#d9d9d9'
    };

 

    render() {
        return(    
            
            
        <div>

            <Modal show={this.state.show} 
                   onHide={this.handleClose} 
                   animation={false}
                   style={{
                       height: '600px'
                   }}>
                <Modal.Header 
                        closeButton
                        style={{
                            backgroundColor: '#0c0769',
                            color: "white",
                        }}
                            >
                <Modal.Title>EDIT PROFILE</Modal.Title>
                </Modal.Header>
                <Modal.Body
                        style={{
                            backgroundColor: '#ecebfc',
                            color: '#0c0769',
                            height: '250px'

                        }}>
                    <div className="list">
                        <p className="changeField">Edit name:</p>
                        <input  value={this.state.changeName}
                                onChange={this.handleChangeName} 
                                placeholder={this.state.userName}></input>
                        <p className="changeField">Edit surname:</p>
                        <input  value={this.state.changeSurname} 
                                onChange={this.handleChangeSurname} 
                                placeholder={this.state.userSurname}></input>
                        <p className="changeField">Edit email:</p>
                        <input value={this.state.changeEmail}
                               type="email" 
                               onChange={this.handleChangeEmail} 
                               placeholder={this.state.userEmail}></input>
                    
                    </div>
                </Modal.Body>
                <Modal.Footer
                            style={{
                                height: '60px',
                                marginTop: '-30px',
                                marginBottom: '40px',
                            }}>

                        <Button type="submit"
                                variant="primary"
                                onClick={this.handleChange}
                                style={{
                                    marginRight: '50px',
                                    marginBottom: '15px',
                                    color: '#0c0769',
                                    fontFamily: 'Montserrat',
                                    fontSize: '16px' 
                                }} 
                                >Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>

            <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'></link>
            
            <Container  style={{
                                backgroundColor: '#ecebfc',
                                marginTop: '100px',
                                height: '700px',
                                borderInline: '3px solid #0c0769'
                                }}>

                <Line/>
                <Avatar/>
   


                <div className="list">   
                    <Button 
                        value={'CHANGE PHOTO'}
                        onClick={this.handleShow}
                    >EDIT PROFILE</Button>             
                    <Button 
                        value={'CHANGE PHOTO'}
                        callBack={function(){console.log('logic')}}
                    >CHANGE PHOTO</Button>
                    <Button 
                        value={'CHANGE PHOTO'}
                        callBack={function(){console.log('logic')}}
                    >RESET PASSWORD</Button>

                </div>
                <div className="list">                
                    <Button 
                            value={'CHANGE PHOTO'}
                            callBack={function(){console.log('logic')}}
                        >VIEW HISTORY</Button>
                    <Button 
                            value={'CHANGE PHOTO'}
                            callBack={function(){console.log('logic')}}
                        >GO TO SERVICE</Button>

                <div className="listFields">
                        <p className="userField">NAME:</p>
                        <p className="userData">{this.state.userName}</p>
                        <p className="userField">SURNAME:</p>
                        <p className="userData">{this.state.userSurname}</p>
                        <p className="userField">EMAIL:</p>
                        <p className="userData">{this.state.userEmail}</p>
                </div>
                </div>
            </Container>
        </div>
        );
      }
    }

export default UserProfile;