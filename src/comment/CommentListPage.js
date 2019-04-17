import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';
import styles from './comment.css';

class CommentListPage extends React.Component {
  constructor(props) {
    super(props);
    const { location, loadCommentList } = this.props;
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    loadCommentList(productId);

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
    const { history } = this.props;
    history.push(`${routes.COMMENT_DETAILS}?commentId=${key}`);
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
            <Toast
              key={comment.id}
              style={{ cursor: 'pointer' }}
              onClick={this.handleClick.bind(this, comment.id)}
            >
              <ToastHeader>Review Text</ToastHeader>
              <ToastBody>{comment.content}</ToastBody>
            </Toast>
          ))}
        </div>
      </div>
    );
  }
}

CommentListPage.propTypes = {
  loadCommentList: PropTypes.func.isRequired,
  commentList: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

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
