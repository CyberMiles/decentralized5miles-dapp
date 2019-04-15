import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import { view as HomePage } from './home';
import { view as ProductPage } from './product';
import {
  commentDetailsPage as CommentDetailsPage,
  commentListPage as CommentListPage,
} from './comment';
import routes from './constants/routes';

export default () => (
  <App>
    <Switch>
      <Route path={routes.PRODUCT_DETAILS} component={ProductPage} />
      <Route path={routes.COMMENT_LIST} component={CommentListPage} />
      <Route path={routes.COMMENT_DETAILS} component={CommentDetailsPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
