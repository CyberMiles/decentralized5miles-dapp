import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class CommentListPage extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    this.props.loadCommentList(productId);
  }

  handleClick(key) {
    this.props.history.push(`${routes.COMMENT_DETAILS}?commentId=${key}`);
  }

  render() {
    const { commentList } = this.props;

    return (
      <div>
        <header>
          {/* <Link to={{ pathname: routes.PRODUCT_DETAILS, search: `?id=${productId}` }}>后退</Link> */}
          <h1 align="center">Review List</h1>
          <hr />
        </header>
        <div className="p-3 my-2 rounded">
          {commentList.map(comment => (
            <Toast key={comment.id} style={{ cursor: 'pointer' }} onClick={this.handleClick.bind(this, comment.id)}>
              <ToastHeader>Review Text</ToastHeader>
              <ToastBody>{comment.content}</ToastBody>
            </Toast>
          ))}
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
