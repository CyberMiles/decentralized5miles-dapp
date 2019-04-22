import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardBody, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from './actions';
import routes from '../constants/routes';
import styles from './product.css';

class ProductDetailsPage extends React.Component {
  componentDidMount() {
    const { location, loadProductDetails, productHasComments } = this.props;
    const params = new URLSearchParams(location.search);
    this.productId = params.get('productId');
    loadProductDetails(this.productId);
    productHasComments(this.productId);
  }

  render() {
    const { product, status, hasComments } = this.props;

    if (status === 'LOADING') {
      return <div>LOADING</div>;
    }

    let commentSnippet = <div />;
    if (hasComments) {
      commentSnippet = (
        <Link to={{ pathname: routes.COMMENT_LIST, search: `?productId=${this.productId}` }}>
          <Button color="success">Review</Button>
        </Link>
      );
    }

    return (
      <div>
        {/* <header>
          <h1 align="center">Product Details</h1>
          <hr />
        </header> */}
        <div>
          <Card>
            <CardImg top width="100%" src={product.imageLink} alt={product.title} />
            <CardBody>
              <CardText>
                <Row>
                  <Col>
                    <h5>Product ID: </h5>
                  </Col>
                  <Col sm={{ offset: 0 }}>{commentSnippet}</Col>
                </Row>
                <p>{product.id}</p>
              </CardText>
              <CardText>
                <h5>Title: </h5>
                <p>{product.title}</p>
              </CardText>
              <CardText>
                <h5>Description: </h5>
                <p>{product.desc}</p>
              </CardText>
              <CardText>
                <h5>Category: </h5> <p>{product.category}</p>
              </CardText>
              <CardText>
                <h5>State: </h5>
                <p> {product.state}</p>
              </CardText>
              <CardText>
                <h5>User ID: </h5> <p>{product.userId}</p>
              </CardText>
              <CardText>
                <h5>Location: </h5> <p>{product.location}</p>
              </CardText>
              <CardText>
                <h5>Created At: </h5> <p>{product.createdAt}</p>
              </CardText>
              <CardText>
                <h5>Updated At: </h5> <p>{product.updatedAt}</p>
              </CardText>
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
  productHasComments: PropTypes.func,
  status: PropTypes.string.isRequired,
  hasComments: PropTypes.bool.isRequired,
};

// ProductDetailsPage.defaultProps = {
//   hasComments: false,
// };

const mapStateToProps = state => ({
  product: state.product.product,
  status: state.product.status,
  hasComments: state.product.hasComments,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsPage);
