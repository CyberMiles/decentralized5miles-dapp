import {
  LOAD_PRODUCT_DETAILS_STARTED,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_HAS_COMMENTS_SUCCESS,
} from './actionTypes';

const initialState = () => ({
  product: null,
  status: 'LOADING',
  hasComments: false,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_PRODUCT_DETAILS_STARTED: {
      return { ...state, status: 'LOADING' };
    }
    case LOAD_PRODUCT_DETAILS_SUCCESS: {
      return { ...state, status: 'LOADED', product: action.product };
    }
    case PRODUCT_HAS_COMMENTS_SUCCESS: {
      return { ...state, hasComments: action.hasComments };
    }
    default:
      return state;
  }
};
