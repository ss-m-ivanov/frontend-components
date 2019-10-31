import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {NavLink} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer className="bg-light">
                <Container>
                    <Row>
                        <Col md="6">
                            <h5 className="title">FilterMe</h5>
                            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequatur non quas voluptatum. Autem, cumque dolorem dolores doloribus dolorum eaque harum incidunt iure odit perspiciatis repellendus saepe vitae! Saepe.</span></p>
                        </Col>
                        <Col md="5">
                            <h5 className="title">Links:</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <NavLink to="#">Facebook</NavLink>
                                </li>
                                <li className="list-unstyled">
                                    <NavLink to="#">Telegram</NavLink>
                                </li>
                                <li className="list-unstyled">
                                    <NavLink to="#">LinkedIn</NavLink>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
    );
    }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer
