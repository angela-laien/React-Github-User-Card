import React from 'react';
import FollowerCard from './FollowerCard';
import { Container, Row } from "reactstrap";

function FollowersList(props) {

    return(
        <Container>
            <Row>
                {props.followers.map((follower, i) => (
                    <FollowerCard follower={follower} key={i} />
                ))}
            </Row>
        </Container>
    )
}

export default FollowersList;