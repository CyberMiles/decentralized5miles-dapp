import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Media, Card, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';
import * as actions from './actions';
import routes from '../constants/routes';
import logo from '../logo.png';
import ClickableCardGroup from "./ClickableCardGroup.jsx";
import styles from './home.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadNumOfProducts();
    this.props.loadNumOfComments();
    this.props.loadRecentItems();
  }

  onProductClicked(key, e) {
    // const productId = e.target.getAttribute('key');
    this.props.history.push(`${routes.PRODUCT_DETAILS}?productId=${key}`);
  }

  render() {
    const { numOfProducts, numOfComments, contractAddress, recentItems } = this.props;
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
          {recentItems.map(item => (
            <ClickableCardGroup item={item} onClick={this.onProductClicked.bind(this, item.id)} key={item.id}/>
          ))}
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
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

// HomePage.protoTypes = {
//   history: PropTypes.object,
//   numOfProducts: PropTypes.number,
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
