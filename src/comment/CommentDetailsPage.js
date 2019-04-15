import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class CommentDetailsPage extends React.Component {
  componentDidMount() {}

  render() {
    const { comment, location } = this.props;
    const params = new URLSearchParams(location.search);
    const commentId = params.get('commentId');

    return (
      <div>
        <div>
          <Link to={{ pathname: '/comment-list', search: `?id=${commentId}` }}>后退</Link>
        </div>
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://fivemiles-res.cloudinary.com/image/upload/f_auto,t_i800/v1554684850/qgbwrxrltzpnvy6kkwb5.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
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
