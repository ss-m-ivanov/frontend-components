import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import EditProfileModal from './EditProfileModal/EditProfileModal';
import axios from "axios";

const Profile = props => {

   const [state, setState] = useState({
       changeName: "",
       changeSurname: "",
       changeEmail: "",
       changeImageUrl: ""
   });

   const [show, setShow] = useState(false);

   const handleClose = () => {
     setState({
       changeName: props.userName,
       changeSurname: props.userSurname,
       changeEmail: props.userEmail,
       changeImageUrl: props.imgUrl
     });
     setShow(false);
   };

   const handleShow = () => {
       setState({
       changeName: props.userName,
       changeSurname: props.userSurname,
       changeEmail: props.userEmail,
       changeImageUrl: props.imgUrl
     });
       setShow(true);
   }

    const handleChange = event => {
        event.preventDefault();
        axios({ method: 'put',
              url: "http://localhost:5000/profile",
              withCredentials: true,
              data: {user_email: state.changeEmail,
              user_first_name: state.changeName, user_last_name: state.changeSurname, user_image_file: state.changeImageUrl}})
              .then(response => {
                setShow(false)
              })
              .catch(error => alert(error));
    }

    const handleChangeName = event => {
        const currentValue = event.target.value;
        setState(prevState => ({
            ...prevState, changeName: currentValue
        }));
    }

    const handleChangeSurname = event => {
        const currentValue = event.target.value;
        setState(prevState => ({
            ...prevState, changeSurname: currentValue
        }));
    }

    const handleChangeEmail = event => {
      const currentValue = event.target.value;
      setState(prevState => ({
          ...prevState, changeEmail: currentValue
      }));
    }

    const handleChangeImageUrl = event => {
      const currentValue = event.target.value;
      setState(prevState => ({
          ...prevState, changeImageUrl: currentValue
      }));
    };

    return(
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="w-50 h-75 violet-frame bg-light">
          <div className="row w-100 h-50 m-0 p-3">
              <div className="col-4 h-100 p-0 m-0 d-flex justify-content-center align-items-center">
                <img className="rounded-circle h-100" src={props.imgUrl} alt="User avatar"/>
              </div>
              <div className="col- h-100 p-3 d-flex justify-content-around flex-column">
                  <h5 className="font-weight-bold">NAME:</h5>
                  <h5>{props.userName}</h5>
                  <h5 className="font-weight-bold">SURNAME:</h5>
                  <h5>{props.userSurname}</h5>
                  <h5 className="font-weight-bold">EMAIL:</h5>
                  <h5>{props.userEmail}</h5>
              </div>
          </div>
          <div className="row w-100 h-25 m-0 p-3 d-flex justify-content-center align-items-center flex-column">
            <ButtonGroup aria-label="Profile-buttons">
              <Button variant="secondary">View History</Button>
              <Button variant="secondary" onClick={handleShow}>Edit profile</Button>
              <Button variant="secondary">Change password</Button>
            </ButtonGroup>
          </div>
          <div className="row w-100 h-25 m-0 p-3 d-flex justify-content-center align-items-center">
            <div className="m-3">
              <h5 className="font-weight-bold">WITH US</h5>
              <h5>12m.</h5>
            </div>
            <div className="m-3">
              <h5 className="font-weight-bold">FILTERS MADE</h5>
              <h5>234</h5>
            </div>
            <div className="m-3">
              <h5 className="font-weight-bold">FILE LOADED</h5>
              <h5>152</h5>
            </div>
          </div>
        </div>
        <EditProfileModal show={show} handleShow={handleShow} handleClose={handleClose}
        handleChangeName = {handleChangeName} handleChangeSurname={handleChangeSurname} handleChangeEmail={handleChangeEmail} handleChangeImageUrl={handleChangeImageUrl}
        userName={state.changeName} userSurname={state.changeSurname} userEmail={state.changeEmail} imgUrl={state.changeImageUrl} handleChange={handleChange}/>
      </div>
        );
};

export default Profile;
