import React, {useState} from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from 'axios';


const NavigationBar = (props) => {

    const logout = () => {
      axios({
            method: 'get',
            url: "0.0.0.0:80/logout",
            withCredentials: true
        })
            .then(responce => {
              props.deactivateAuthStatus();
              props.history.push("/login");
            })
            .then(res => console.log(res))
            .catch(error => alert(error));
    }
        return (
            <Navbar collapseOnSelect className="fixed-top" expand="lg" bg="light" variant="light">
                <Navbar.Brand className="font-weight-bold" href="/">FilterMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><NavLink to={"/about"}>About</NavLink></Nav.Link>
                        {
                            props.isAuth
                                ? <>
                                    <Nav.Link href="#"><NavLink to={"/filter"}>Filter</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/history"}>History</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/feedback"}>Feedback</NavLink></Nav.Link>
                                    <Nav.Link href="#" onClick={event => logout()}><NavLink to={"/"}>Logout</NavLink></Nav.Link>
                                    <Nav.Link className="p-0 ml-2" href="#">
                                      <NavLink to={"/profile"}>
                                      <div>
                                      <img src={props.imgUrl} width="40" alt="User`s avatar" className="rounded-circle"/>
                                      </div>
                                      </NavLink>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link href="#"><NavLink to={"/login"}>Login</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/register"}>Register</NavLink></Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}

NavigationBar.propTypes = {};
NavigationBar.defaultProps = {};

export default NavigationBar;
