import { LOAD_PRODUCT_DETAILS_STARTED, LOAD_PRODUCT_DETAILS_SUCCESS } from './actionTypes';

const initialState = () => ({
  product: null,
  status: 'LOADING',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_PRODUCT_DETAILS_STARTED: {
      return { ...state, status: 'LOADING' };
    }
    case LOAD_PRODUCT_DETAILS_SUCCESS: {
      return { ...state, status: 'LOADED', product: action.product };
    }
    default:
      return state;
  }
};
