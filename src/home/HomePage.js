import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Media, Card, CardTitle, CardText, Table, Tbody } from 'reactstrap';
import PropTypes from 'prop-types';
import * as actions from './actions';
import routes from '../constants/routes';
import logo from '../logo.png';
import RecentList from './RecentList';
import styles from './home.css';

class HomePage extends React.Component {
  componentDidMount() {
    const { loadNumOfComments, loadNumOfProducts, loadRecentItems } = this.props;
    loadNumOfProducts();
    loadNumOfComments();
    loadRecentItems();
  }

  onPressItem = (id) => {
    console.log(`id: ${id}`);
    const { history } = this.props;
    history.push(`${routes.PRODUCT_DETAILS}?productId=${id}`);
  }

  keyExtractor = (item, index) => item.id;

  render() {
    const { numOfProducts, numOfComments, contractAddress, recentItems, status } = this.props;

    let snippet = <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    if (status === 'LOADED') {
      snippet = <RecentList data={recentItems} onPressItem={this.onPressItem} keyExtractor={this.keyExtractor} />;
    }

    return (
      <div>
        {/* <header>
          <h1 align="center">Decentralized e-commerce at 5miles</h1>
          <hr />
        </header> */}

        <Container>
          <header>
            <Media>
              <Media left>
                <Media object src={logo} alt="logo" className="logo" />
              </Media>
              <Media body>
                <Media heading>Contract Address</Media>
                {contractAddress}
              </Media>
            </Media>
          </header>
          <Row className="summ">
            <Col>
              <Card body>
                <CardTitle>Product</CardTitle>
                <CardText>{numOfProducts}</CardText>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>Review</CardTitle>
                <CardText>{numOfComments}</CardText>
              </Card>
            </Col>
          </Row>
          <div className="items">
            {snippet}
          </div>
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
