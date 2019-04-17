import {
  LOAD_NUM_OF_PRODUCTS_STARTED,
  LOAD_NUM_OF_PRODUCTS_SUCCESS,
  LOAD_NUM_OF_COMMENTS_STARTED,
  LOAD_NUM_OF_COMMENTS_SUCCESS,
  LOAD_RECENT_ITEMS_SUCCESS,
  LOAD_RECENT_ITEMS_STARTED,
} from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';
import Product from '../models/Product';

export const loadNumOfProductsStarted = () => ({
  type: LOAD_NUM_OF_PRODUCTS_STARTED,
});

export const loadNumOfProductsSuccess = numOfProducts => ({
  type: LOAD_NUM_OF_PRODUCTS_SUCCESS,
  numOfProducts,
});

export const loadNumOfProducts = () => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return dispatch => {
    dispatch(loadNumOfProductsStarted());
    contract.numOfProducts().then(numOfProducts => {
      dispatch(loadNumOfProductsSuccess(numOfProducts.toNumber()));
    });
  };
};

export const loadNumOfCommentsStarted = () => ({
  type: LOAD_NUM_OF_COMMENTS_STARTED,
});

export const loadNumOfCommentsSuccess = numOfComments => ({
  type: LOAD_NUM_OF_COMMENTS_SUCCESS,
  numOfComments,
});

export const loadNumOfComments = () => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return dispatch => {
    dispatch(loadNumOfCommentsStarted());
    contract.numOfComments().then(numOfComments => {
      dispatch(loadNumOfCommentsSuccess(numOfComments.toNumber()));
    });
  };
};

export const loadRecentItemsStarted = () => ({
  type: LOAD_RECENT_ITEMS_STARTED,
});

export const loadRecentItemsSuccess = recentItems => ({
  type: LOAD_RECENT_ITEMS_SUCCESS,
  recentItems,
});

export const loadRecentItems = () => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return dispatch => {
    dispatch(loadRecentItemsStarted());
    contract.loadRecentItems().then(rawStrArray => {
      const recentItems = rawStrArray.map(rawStr => {
        return Product.fromString(rawStr);
      });
      dispatch(loadRecentItemsSuccess(recentItems));
    });
  };
};
