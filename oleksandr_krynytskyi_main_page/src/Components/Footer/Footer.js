import React, {Component} from 'react'
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white">
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
                                    <a href="#">Link1</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#">Link2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#">Link3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#">Link4</a>
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
