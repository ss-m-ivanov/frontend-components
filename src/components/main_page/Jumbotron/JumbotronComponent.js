import React, { Component } from 'react'
import {Jumbotron} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class JumbotronComponent extends Component {
    render() {
        return (
            <Jumbotron className="bg-light violet-frame rounded d-flex justify-content-center align-items-center flex-column">
                <h1 className="font-weight-bold mb-2">FilterMe</h1>
                <h4 className="mb-4 text-center">
                    PROCESS YOUR DATA WITH A LITTLE EFFORT
                </h4>
                <p>
                    <Button>Go to the service</Button>
                </p>
            </Jumbotron>
        );
    }
}

JumbotronComponent.propTypes = {};

JumbotronComponent.defaultProps = {};

export default JumbotronComponent
