import React from 'react';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function MyCard(props) {
   return (

    <div className='container'>
        <Card>
            <CardTitle>{props.me.login}</CardTitle>
            <CardBody>
                <CardImg 
                width="20%"
                alt={props.me.login}
                src={props.me.avatar_url}
                />
                <CardSubtitle>Followers: {props.me.followers}</CardSubtitle>
                <Button>
                    <a href={props.me.html_url}>Github Link</a>
                </Button>
            </CardBody>
        </Card>
    </div>

   );
}

export default MyCard;