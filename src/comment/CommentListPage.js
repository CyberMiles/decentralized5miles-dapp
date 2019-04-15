import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class CommentListPage extends React.Component {
  componentDidMount() {}

  render() {
    const { commentList, location } = this.props;
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');

    return (
      <div>
        <div>
          <Link to={{ pathname: routes.PRODUCT_DETAILS, search: `?id=${productId}` }}>后退</Link>
        </div>
        <div className="p-3 my-2 rounded">
          <Toast>
            <ToastHeader>Product Title</ToastHeader>
            <ToastBody>
              This is a toast on a primary background — check it out!
              <Link to={{ pathname: routes.COMMENT_DETAILS, search: '?commentId=1' }}>Details</Link>
            </ToastBody>
          </Toast>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  commentList: state.comment.commentList,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListPage);
