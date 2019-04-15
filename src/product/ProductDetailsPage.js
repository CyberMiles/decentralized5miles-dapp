import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class ProductDetailsPage extends React.Component {
  componentDidMount() {}

  render() {
    const { product, location } = this.props;
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    console.log(`route: ${routes.HOME}`);

    return (
      <div>
        <div>
          <Link to={routes.HOME}>后退</Link>
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
              <Link to={{ pathname: routes.COMMENT_LIST, search: `?productId=${productId}` }}>
                Review
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.product,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsPage);
