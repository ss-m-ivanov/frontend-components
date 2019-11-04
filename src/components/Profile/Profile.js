import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import EditProfileModal from './EditProfileModal/EditProfileModal';

const Profile = () => {
   const [state, setState] = useState({
     userName: "John",
     userSurname: "Johnson",
     userEmail: "john.johnson@gmail.com",
     changeName: "John",
     changeSurname: "Johnson",
     changeEmail: "john.johnson@gmail.com"
   });

   const [show, setShow] = useState(false);
   const handleClose = () => {
     setShow(false);
     setState(prevState => ({
         ...prevState, changeName: state.userName, changeSurname: state.userSurname,
         changeEmail: state.userEmail
     }));
   }
   const handleShow = () => setShow(true);

    const handleChange = event => {
        event.preventDefault();
        setState(prevState => ({
            ...prevState, userName: state.changeName, userSurname: state.changeSurname,
            userEmail: state.changeEmail
        }));
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

    return(
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <div className="w-75 h-75 violet-frame bg-light">
          <div className="row w-100 h-50 m-0 p-3">
              <div className="col-3 h-100 p-0 m-0 d-flex justify-content-center align-items-center">
                <img className="rounded-circle h-100" src="https://uidesign.gearbest.com/gb_blog/author/Steve-Lowry-2.png" alt="User avatar"/>
              </div>
              <div className="col-9 h-100 p-3 d-flex justify-content-around flex-column">
                  <h5 className="font-weight-bold">NAME:</h5>
                  <h5>{state.userName}</h5>
                  <h5 className="font-weight-bold">SURNAME:</h5>
                  <h5>{state.userSurname}</h5>
                  <h5 className="font-weight-bold">EMAIL:</h5>
                  <h5>{state.userEmail}</h5>
              </div>
          </div>
          <div className="row w-100 h-25 m-0 p-3 d-flex justify-content-center align-items-center flex-column">
            <ButtonGroup aria-label="Profile-buttons">
              <Button variant="secondary">View History</Button>
              <Button variant="secondary" onClick={handleShow}>Edit profile</Button>
              <Button variant="secondary">Change password</Button>
            </ButtonGroup>
          </div>
          <div className="row w-100 h-25 m-0 p-3 d-flex justify-content-end align-items-end">
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
        handleChangeName = {handleChangeName} handleChangeSurname={handleChangeSurname} handleChangeEmail={handleChangeEmail}
        userName={state.changeName} userSurname={state.changeSurname} userEmail={state.changeEmail} handleChange={handleChange}/>
      </div>
        );
};

export default Profile;
