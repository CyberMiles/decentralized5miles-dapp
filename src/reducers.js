import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as homeReducer } from './home';
// import { reducer as productReducer } from './product';
// import { reducer as commentReducer } from './comment';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    home: homeReducer,
    // product: productReducer,
    // comment: commentReducer,
  });
}
