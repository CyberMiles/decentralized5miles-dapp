import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './actions';
import routes from '../constants/routes';
import styles from './product.css';

class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    const { location, loadProductDetails } = this.props;
    const params = new URLSearchParams(location.search);
    this.productId = params.get('productId');
    loadProductDetails(this.productId);
  }

  render() {
    const { product } = this.props;

    if (product == null) {
      return <div />;
    }

    return (
      <div>
        <header>
          {/* <Link to={routes.HOME}>后退</Link> */}
          <h1 align="center">Product Details</h1>
          <hr />
        </header>
        <div>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://fivemiles-res.cloudinary.com/image/upload/f_auto,t_i800/v1554684850/qgbwrxrltzpnvy6kkwb5.jpg"
              alt={product.title}
            />
            <CardBody>
              <CardText>
                Product ID: <br />
                {product.id}
              </CardText>
              <CardText>
                Title: <br />
                {product.title}
              </CardText>
              <CardText>
                Description: <br />
                {product.desc}
              </CardText>
              <CardText>
                Category: <br /> {product.category}
              </CardText>
              <CardText>
                State: <br /> {product.state}
              </CardText>
              <CardText>
                User ID: <br /> {product.userId}
              </CardText>
              <CardText>
                Location: <br /> {product.location}
              </CardText>
              <CardText>
                Created At: <br /> {product.createdAt}
              </CardText>
              <CardText>
                Updated At: <br /> {product.updatedAt}
              </CardText>
              <Link to={{ pathname: routes.COMMENT_LIST, search: `?productId=${this.productId}` }}>
                Review
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

ProductDetailsPage.propTypes = {
  product: PropTypes.object,
  location: PropTypes.object.isRequired,
  loadProductDetails: PropTypes.func,
};

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
