import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default ({ item, onClick }) => (
  <CardGroup tag="a" onClick={onClick} style={{ cursor: 'pointer' }}>
    <Card>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.desc}</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Price</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
    </Card>
  </CardGroup>
);
