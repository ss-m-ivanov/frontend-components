import React, { Component } from 'react'
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";


class NavigationBar extends Component {
    state = {
        "isAuth": true,
        "imgUrl": "https://uidesign.gearbest.com/gb_blog/author/Steve-Lowry-2.png"
    };

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">FilterMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink to={"/"}>About</NavLink></Nav.Link>
                        {
                            this.state.isAuth
                                ? <>
                                    <Nav.Link href="#login">Logout</Nav.Link>
                                    <Nav.Link><NavLink to={"/history"}>History</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to={"/filter"} >Filter</NavLink></Nav.Link>
                                    <Nav.Link href="#feedback">Feedback</Nav.Link>
                                    <div className="ml-1">
                                        <img src={this.state.imgUrl} width="40" alt={"User`s avatar"}/>
                                    </div>
                                </>
                                : <>
                                    <Nav.Link href="#login">Login</Nav.Link>
                                    <Nav.Link href="#login">Register</Nav.Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

NavigationBar.propTypes = {};
NavigationBar.defaultProps = {};

export default NavigationBar
