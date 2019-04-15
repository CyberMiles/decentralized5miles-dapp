import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Row, Col, Media, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as actions from './actions';
import routes from '../constants/routes';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadNumOfProducts();
    this.props.loadNumOfComments();
  }

  render() {
    const { numOfProducts, numOfComments, contractAddress } = this.props;
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      //   <p>Product Info: {numOfProducts}</p>
      //   <p>Product Review: {numOfComments}</p>
      // </div>
      <Container>
        <Row>
          <Col>
            <Media>
              <Media left href="#">
                <Media object data-src="holder.js/64x64" alt="Logo" />
              </Media>
              <Media body>
                {/* <Media heading>
                  Media heading
                </Media> */}
                Contract Address: {contractAddress}
              </Media>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>Product Info {numOfProducts}</Col>
          <Col>Product Review {numOfComments}</Col>
        </Row>
        <Row>
          <Col>Showing the last 100 Records</Col>
        </Row>
        <Row>
          <Col>
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>Product Title</ToastHeader>
                <ToastBody>
                  This is a toast on a primary background — check it out!
                  <Link to={{ pathname: routes.PRODUCT_DETAILS, search: '?productId=1' }}>Details</Link>
                </ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  numOfProducts: state.home.numOfProducts,
  numOfComments: state.home.numOfComments,
  recentItems: state.home.recentItems,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
