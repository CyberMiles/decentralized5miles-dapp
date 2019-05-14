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
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { loadNumOfComments, loadNumOfProducts, loadRecentItems } = this.props;
    loadNumOfProducts();
    loadNumOfComments();

    setInterval(() => {
      loadNumOfProducts();
      loadNumOfComments();
    }, 5000);

    loadRecentItems();
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { history } = this.props;
    history.push(`${routes.PRODUCT_DETAILS}?productId=${this.state.value}`);
    event.preventDefault();
  }

  onPressItem = (id) => {
    const { history } = this.props;
    history.push(`${routes.PRODUCT_DETAILS}?productId=${id}`);
  }

  keyExtractor = (item, index) => item.id;

  render() {
    const { numOfProducts, numOfComments, contractAddress, recentItems, numOfProductsLoadingStatus, numOfCommentsLoadingStatus, recentItemsLoadingStatus } = this.props;

    let snippet = <div className="lds-ring"><div></div><div></div><div></div><div></div></div>;
    if (recentItemsLoadingStatus === 'LOADED') {
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
          <p className="since">since 5/9/2019</p>
          <Row className="summ">
            <Col>
              <Card body>
                <CardTitle>Products Count</CardTitle>
                <CardText>{numOfProducts}</CardText>
              </Card>
            </Col>
            <Col>
              <Card body>
                <CardTitle>Reviews Count</CardTitle>
                <CardText>{numOfComments}</CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit={this.handleSubmit}>
                <input placeholder="Product ID" type="text" value={this.state.value} onChange={this.handleChange} />
                <input class="btn btn-outline-dark btn-sm" type="submit" value="Submit" />
              </form>
            </Col>
          </Row>
          <p className="list-header">Selected 5miles listings</p>
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
  numOfProductsLoadingStatus: state.home.numOfProductsLoadingStatus,
  numOfCommentsLoadingStatus: state.home.numOfCommentsLoadingStatus,
  recentItemsLoadingStatus: state.home.recentItemsLoadingStatus
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
  numOfProductsLoadingStatus: PropTypes.string,
  numOfCommentsLoadingStatus: PropTypes.string,
  recentItemsLoadingStatus: PropTypes.string
};

HomePage.defaultProps = {
  recentItems: [],
  numOfProductsLoadingStatus: 'LOADING',
  numOfCommentsLoadingStatus: 'LOADING',
  recentItemsLoadingStatus: 'LOADING',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
