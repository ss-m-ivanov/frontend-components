import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './components/LoginForm/Login'
import ForgotPassword from './components/ForgotPasswordForm/ForgotPassword'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import FeedbackForm from './components/FeedbackForm/FeedbackForm'



class UserRouting extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>

                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/forgot">ForgotPassword</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/feedback">Feedback</Link>
                            </li>

                        </ul>
                    </nav>

                    <div className="container">
                        <div className="row align-middle">
                            <div className="col p-0">
                                <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            </div>
                            <div className="col">
                                <Switch>
                                    <Route path="/login">
                                        <Login />
                                    </Route>

                                    <Route path="/forgot">
                                        <ForgotPassword />
                                    </Route>

                                    <Route path="/register">
                                        <RegistrationForm />
                                    </Route>
                                    <Route path="/feedback">
                                        <FeedbackForm />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>

                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    {/* <Switch>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/users">
                    <Users />
                    </Route>
                    <Route path="/">
                    <Home />
                    </Route>
                </Switch> */}
                </div>
            </Router>
        )
    }
}


export default UserRouting;