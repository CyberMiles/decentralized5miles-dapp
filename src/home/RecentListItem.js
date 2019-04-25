import React from 'react';
import { Media } from 'reactstrap';

class RecentListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const { item } = this.props;
    return (
      <Media onClick={this.onPress}>
        <Media left>
          <Media object src={item.getImageLinkTransformed('t_i70')} alt={item.title} />
        </Media>
        <Media body>
          <Media heading>
            {item.title}
          </Media>
          <div>{item.desc}</div>
          <span className="item-price">{item.price}</span>
        </Media>
      </Media>
    );
  }
}

export default RecentListItem;
