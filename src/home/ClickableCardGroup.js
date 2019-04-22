import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

export default ({ item, onClick }) => (
  <CardGroup tag="a" onClick={onClick} style={{ cursor: 'pointer', width: '100%', 'margin-bottom': '0.2rem' }}>
    <Card>
      <CardBody color="success">
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.desc}</CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody className="text-center">
        <CardTitle>Price</CardTitle>
        <CardText>{item.price}</CardText>
      </CardBody>
    </Card>
  </CardGroup>
);
