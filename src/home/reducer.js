import {
  LOAD_NUM_OF_PRODUCTS_STARTED,
  LOAD_NUM_OF_PRODUCTS_SUCCESS,
  LOAD_NUM_OF_COMMENTS_STARTED,
  LOAD_NUM_OF_COMMENTS_SUCCESS,
  LOAD_RECENT_ITEMS_SUCCESS,
  LOAD_RECENT_ITEMS_STARTED,
} from './actionTypes';
import constants from '../constants/constants';

const initialState = () => ({
  numOfProducts: 0,
  numOfComments: 0,
  contractAddress: constants.CONTRACT_ADDRESS,
  recentItems: [],
  numOfProductsLoadingStatus: 'LOADING',
  numOfCommentsLoadingStatus: 'LOADING',
  recentItemsLoadingStatus: 'LOADING',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_NUM_OF_COMMENTS_STARTED: {
      return { ...state, status: 'LOADING' };
    }
    case LOAD_NUM_OF_COMMENTS_SUCCESS: {
      return { ...state, numOfComments: action.numOfComments, numOfCommentsLoadingStatus: 'LOADED' };
    }
    case LOAD_NUM_OF_PRODUCTS_STARTED: {
      return { ...state, status: 'LOADING' };
    }
    case LOAD_NUM_OF_PRODUCTS_SUCCESS: {
      return { ...state, numOfProducts: action.numOfProducts, numOfProductsLoadingStatus: 'LOADED' };
    }
    case LOAD_RECENT_ITEMS_STARTED: {
      return { ...state, status: 'LOADING' };
    }
    case LOAD_RECENT_ITEMS_SUCCESS: {
      return { ...state, recentItems: action.recentItems, recentItemsLoadingStatus: 'LOADED' };
    }
    default:
      return state;
  }
};
