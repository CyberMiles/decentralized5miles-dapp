import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Media, Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';
import * as actions from './actions';
import routes from '../constants/routes';
import logo from '../logo.png';
import ClickableCardGroup from './ClickableCardGroup.js';
import styles from './home.css';

class HomePage extends React.Component {
  componentDidMount() {
    const { loadNumOfComments, loadNumOfProducts, loadRecentItems } = this.props;
    loadNumOfProducts();
    loadNumOfComments();
    loadRecentItems();
  }

  onProductClicked(key) {
    const { history } = this.props;
    history.push(`${routes.PRODUCT_DETAILS}?productId=${key}`);
  }

  render() {
    const { numOfProducts, numOfComments, contractAddress, recentItems, status } = this.props;

    let snippet = <div>LOADING</div>;
    if (status === 'LOADED') {
      snippet = recentItems.map(item => (
        <ClickableCardGroup item={item} onClick={this.onProductClicked.bind(this, item.id)} key={item.id} />
      ));
    }

    return (
      <div>
        <header>
          <h1 align="center">Decentralized e-commerce at 5miles</h1>
          <hr />
        </header>

        <Container>
          <Row>
            <Col>
              <Media>
                <Media left>
                  <Media object src={logo} alt="logo" className="logo" />
                </Media>
                <Media body>
                  <Media heading>Contract Address</Media>
                  {contractAddress}
                </Media>
              </Media>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card body>
                <CardTitle>Product Info</CardTitle>
                <CardText>{numOfProducts}</CardText>
              </Card>
            </Col>
            <Col sm="4">
              <Card body>
                <CardTitle>Product Review</CardTitle>
                <CardText>{numOfComments}</CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>Showing the last 100 Records</Col>
          </Row>
          {snippet}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numOfProducts: state.home.numOfProducts,
  numOfComments: state.home.numOfComments,
  contractAddress: state.home.contractAddress,
  recentItems: state.home.recentItems,
  status: state.home.status,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

HomePage.propTypes = {
  numOfProducts: PropTypes.number,
  numOfComments: PropTypes.number,
  contractAddress: PropTypes.string,
  history: PropTypes.object,
  recentItems: PropTypes.array,
  loadNumOfProducts: PropTypes.func.isRequired,
  loadNumOfComments: PropTypes.func.isRequired,
  loadRecentItems: PropTypes.func.isRequired,
  status: PropTypes.string,
};

HomePage.defaultProps = {
  recentItems: [],
  status: 'LOADING',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
