import React, {Component} from 'react'
import {Container} from "react-bootstrap";


class Footer extends Component {
    render() {
        return (
            <footer className="bg-light fixed-bottom">
                <Container className="p-2">
                  <ul className="mb-3 d-flex justify-content-around">
                    <h5 className="title m-0">Links:</h5>
                    <li className="list-unstyled">
                      <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://web.telegram.org/">Telegram</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="https://www.linkedin.com/">LinkedIn</a>
                    </li>
                  </ul>
                  <p className="m-0 text-center">©All rights reserved.</p>
              </Container>
            </footer>
    );
    }
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer
