import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import { view as HomePage } from './home';
// import { view as ProductPage } from './product';
// import { view as CommentPage } from './comment';

export default () => (
  <App>
    <Switch>
      {/* <Route path="/product-details" component={ProductPage} /> */}
      {/* <Route path="/comment-list" component={CommentListPage} /> */}
      {/* <Route path="/comment-details" component={CommentDetailsPage} /> */}
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
