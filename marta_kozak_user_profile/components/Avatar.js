import React from "react";
import './style.css';
import Avatar from '../img/man.png'



function UserAvatar(){
  return (
        <img src={Avatar} alt="Avatar" className="Avatar" />
    );
}

export default UserAvatar;