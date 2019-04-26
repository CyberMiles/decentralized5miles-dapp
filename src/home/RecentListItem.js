import React from 'react';
import { Media } from 'reactstrap';
import constants from '../constants/constants';

class RecentListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const { item } = this.props;
    return (
      <Media onClick={this.onPress}>
        <Media left>
          <Media object src={item.getImageLinkTransformed('t_i90')} alt={item.title} />
        </Media>
        <Media body>
          <Media heading>
            {item.title}
          </Media>
          <div className="item-note">#{constants.RECENT_ITEMS.filter(i => i.id===item.id)[0].note}</div>
          <div className="item-desc">{item.desc}</div>
          <span className="item-price">{item.price}</span>
        </Media>
      </Media>
    );
  }
}

export default RecentListItem;
