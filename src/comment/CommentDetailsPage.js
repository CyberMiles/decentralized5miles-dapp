import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class CommentDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const commentId = params.get('commentId');
    this.props.loadCommentDetails(commentId);
  }

  render() {
    const { comment } = this.props;

    if (comment == null) {
      return <div />;
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

const mapStateToProps = state => ({
  comment: state.comment.comment,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetailsPage);
