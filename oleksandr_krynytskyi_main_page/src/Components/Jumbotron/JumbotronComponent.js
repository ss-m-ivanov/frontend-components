import React, { Component } from 'react'
import {Jumbotron} from "react-bootstrap";

import Button from "react-bootstrap/Button";


class JumbotronComponent extends Component {
    render() {
        return (
            <Jumbotron className="bg-dark">
                <h1>Hello, world!</h1>
                <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur deserunt dicta et impedit nisi odio placeat provident sint ullam! Amet architecto culpa debitis fuga illum impedit in libero non.</span><span>Cumque dolor necessitatibus praesentium quas. Ad alias aperiam assumenda blanditiis cum deleniti dolorem dolorum eligendi expedita, harum impedit ipsam maiores neque odit quas quo sapiente temporibus ut veritatis voluptatum. Error?</span><span>Animi aperiam architecto asperiores atque corporis delectus doloribus eos est, eveniet harum id laudantium magnam magni minima nesciunt odit, officia placeat quam quia quibusdam sint sunt tenetur ullam voluptate voluptatem.</span><span>Consectetur optio perspiciatis qui voluptatibus. Atque consectetur dignissimos, dolor ducimus fugiat incidunt ipsum iure nesciunt nostrum odio perspiciatis quae quas quisquam reiciendis repudiandae rerum sed sunt suscipit totam vitae voluptates!</span><span>Eius illo maiores quam qui similique sint soluta vero? Ab consequuntur, sed! Autem dolore omnis provident quaerat suscipit. Ab blanditiis commodi cupiditate dolorem fugit labore maiores nostrum obcaecati quaerat vitae.</span>
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        );
    }
}

JumbotronComponent.propTypes = {};

JumbotronComponent.defaultProps = {};

export default JumbotronComponent
