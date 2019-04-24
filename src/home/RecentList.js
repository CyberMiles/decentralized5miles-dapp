import React from 'react';
import PropTypes from 'prop-types';
import RecentListItem from './RecentListItem';

class RecentList extends React.Component {
  render() {
    const { data, onPressItem, keyExtractor } = this.props;
    const snippet = data.map((item, index) => (
      <RecentListItem
        item={item}
        onPressItem={onPressItem}
        key={keyExtractor(item, index)}
        id={keyExtractor(item, index)}
      />
    ));

    return snippet;
  }
}

RecentList.propTypes = {
  data: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func.isRequired,
};

export default RecentList;
