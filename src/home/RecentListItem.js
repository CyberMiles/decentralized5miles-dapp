import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class RecentListItem extends React.PureComponent {
  onPress = () => {
    console.log(`onPress: ${this.props.id}`);
    this.props.onPressItem(this.props.id);
  };

  render() {
    const { item } = this.props;
    return (
      <tr tag="a" onClick={this.onPress} style={{ cursor: 'pointer', width: '100%' }}>
        <td width="75%">
          <Card inverse color="success">
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.desc}</CardText>
            </CardBody>
          </Card>
        </td>
        <td width="25%">
          <Card inverse color="success">
            <CardBody className="text-center">
              <CardTitle>Price</CardTitle>
              <CardText>{item.price}</CardText>
            </CardBody>
          </Card>
        </td>
      </tr>
    );
  }
}

export default RecentListItem;
