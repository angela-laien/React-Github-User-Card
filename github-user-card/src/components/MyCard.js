import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import styled from "styled-components";

function MyCard(props) {

    const Div = styled.div`
       width: 30%;
       margin: 1% 35%;
    `

   return (

    <Div>
        <Card>
            <CardTitle>{props.me.login}</CardTitle>
            <CardBody>
                <CardImg 
                width="100%"
                alt={props.me.login}
                src={props.me.avatar_url}
                />
                <CardSubtitle>Followers: {props.me.followers}</CardSubtitle>
                <Button>
                    <a href={props.me.html_url}>Github Link</a>
                </Button>
            </CardBody>
        </Card>
    </Div>

   );
}

export default MyCard;