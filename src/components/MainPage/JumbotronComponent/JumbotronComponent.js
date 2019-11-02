import React, { Component } from 'react'
import {Jumbotron, Button} from "react-bootstrap";


class JumbotronComponent extends Component {
    render() {
        return (
            <Jumbotron className="bg-light violet-frame rounded d-flex justify-content-center align-items-center flex-column">
                <h1 className="font-weight-bold mb-2">FilterMe</h1>
                <p className="mb-4 text-center">
                    PROCESS YOUR DATA WITH A LITTLE EFFORT
                </p>
                <a href="/filter">
                  <Button>Go to the service</Button>
                </a>
            </Jumbotron>
        );
    }
}

JumbotronComponent.propTypes = {};

JumbotronComponent.defaultProps = {};

export default JumbotronComponent
