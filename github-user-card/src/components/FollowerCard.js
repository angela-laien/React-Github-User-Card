import React from 'react';
import styled from "styled-components";
import { 
    Col, Card, CardTitle, CardBody, CardImg 
} from "reactstrap";

function FollowerCard(props) {

    const Box = styled.div`
        border: 2px solid hotpink;
        width: 20%;
        margin: 1.8% 0% 1.8% 0%;
        padding: 1% 0% 1.5% 0%;
    `;

    const Div = styled.div`
        padding-bottom: 5%;
    `
    return (
        <Col xs="6" md="4" xl="3">
            <Box>
                <Card>
                    <CardBody>
                        <Div><CardTitle>{props.follower.login}</CardTitle></Div>
                        <CardImg
                            width="80%"
                            alt={props.follower.login}
                            src={props.follower.avatar_url}
                        />
                    </CardBody>
                </Card>
            </Box>  
        </Col> 
    );
 }
 
 export default FollowerCard;