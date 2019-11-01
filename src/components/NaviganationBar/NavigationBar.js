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
            <Navbar collapseOnSelect className="fixed-top" expand="lg" bg="light" variant="light">
                <Navbar.Brand className="font-weight-bold" href="/">FilterMe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><NavLink to={"/about"}>About</NavLink></Nav.Link>
                        {
                            this.state.isAuth
                                ? <>
                                    <Nav.Link href="#"><NavLink to={"/filter"}>Filter</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/history"}>History</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/feedback"}>Feedback</NavLink></Nav.Link>
                                    <Nav.Link href="#"><NavLink to={"/logout"}>Logout</NavLink></Nav.Link>
                                    <Nav.Link className="p-0 ml-2" href="#">
                                      <NavLink to={"/profile"}>
                                      <div>
                                      <img src={this.state.imgUrl} width="40" alt="User`s avatar" class="rounded-circle"/>
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
}

NavigationBar.propTypes = {};
NavigationBar.defaultProps = {};

export default NavigationBar
