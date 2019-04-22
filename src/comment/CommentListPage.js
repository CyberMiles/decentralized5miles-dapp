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
  componentDidMount() {
    const { location, loadCommentList } = this.props;
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    loadCommentList(productId);
  }

  handleClick(key) {
    const { history } = this.props;
    history.push(`${routes.COMMENT_DETAILS}?commentId=${key}`);
  }

  render() {
    const { commentList, status } = this.props;

    let snippet = <div>LOADING</div>;
    if (status === 'LOADED') {
      snippet = commentList.map(comment => (
        <Toast key={comment.id} style={{ cursor: 'pointer', 'max-width': '100%' }} onClick={this.handleClick.bind(this, comment.id)}>
          <ToastHeader>Review Text</ToastHeader>
          <ToastBody>{comment.content}</ToastBody>
        </Toast>
      ));
    }

    return (
      <div>
        {/* <header>
          <h1 align="center">Review List</h1>
          <hr />
        </header> */}
        <div className="p-3 my-2 rounded">{snippet}</div>
      </div>
    );
  }
}

CommentListPage.propTypes = {
  loadCommentList: PropTypes.func.isRequired,
  commentList: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

CommentListPage.defaultProps = {
  status: 'LOADING',
};

const mapStateToProps = state => ({
  commentList: state.comment.commentList,
  status: state.comment.commentListStatus,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListPage);
