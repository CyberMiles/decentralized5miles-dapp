import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardText, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import * as actions from './actions';
import styles from './comment.css';

class CommentDetailsPage extends React.Component {
  componentDidMount() {
    const { location, loadCommentDetails } = this.props;
    const params = new URLSearchParams(location.search);
    const commentId = params.get('commentId');
    loadCommentDetails(commentId);
  }

  render() {
    const { comment, status } = this.props;

    if (status === 'LOADING') {
      return <div>LOADING</div>;
    }

    return (
      <div>
        <header>
          {/* <Link to={{ pathname: routes.COMMENT_LIST, search: `?id=${commentId}` }}>后退</Link> */}
          <h1 align="center">Review Details</h1>
          <hr />
        </header>
        <div>
          <Card>
            <CardBody>
              <CardText>
                Review ID: <br />
                {comment.id}
              </CardText>
              <CardText>
                Product ID: <br />
                {comment.productId}
              </CardText>
              <CardText>
                Review Text: <br />
                {comment.content}
              </CardText>
              <CardText>
                Reviewer ID: <br />
                {comment.userId}
              </CardText>
              <CardText>
                Created At: <br />
                {comment.createdAt}
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

CommentDetailsPage.propTypes = {
  location: PropTypes.object.isRequired,
  loadCommentDetails: PropTypes.func.isRequired,
  comment: PropTypes.object,
  status: PropTypes.string,
};

CommentDetailsPage.defaultProps = {
  // comment: null,
  status: 'LOADING',
};

const mapStateToProps = state => ({
  comment: state.comment.comment,
  status: state.comment.commentStatus,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetailsPage);
