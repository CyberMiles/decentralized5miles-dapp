import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardImg, CardText, CardTitle, CardBody, Row, Col, Button } from 'reactstrap';
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
              <CardTitle>
                <Row>
                  <Col>Product ID:</Col>
                  <Col sm={{ offset: 0 }}>{commentSnippet}</Col>
                </Row>
              </CardTitle>
              <CardText>{product.id}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Title: </CardTitle>
              <CardText>{product.title}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Description: </CardTitle>
              <CardText>{product.desc}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Category: </CardTitle> <CardText>{product.category}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>State: </CardTitle>
              <CardText>{product.state}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>User ID: </CardTitle> <CardText>{product.userId}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Location: </CardTitle> <CardText>{product.location}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Created At: </CardTitle> <CardText>{product.createdAt}</CardText>
            </CardBody>
            <CardBody>
              <CardTitle>Updated At:</CardTitle>
              <CardText> {product.updatedAt}</CardText>
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
