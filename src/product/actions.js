import {
  LOAD_PRODUCT_DETAILS_STARTED,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  PRODUCT_HAS_COMMENTS_SUCCESS,
} from './actionTypes';
import constants from '../constants/constants';
import ContractWrapper from '../utils/ContractWrapper';
import Product from '../models/Product';

const contract = new ContractWrapper(
  constants.WEB3_PROVIDER,
  constants.ABI,
  constants.CONTRACT_ADDRESS,
  constants.ONNER_ADDRESS
);

export const loadProductDetailsStarted = id => ({
  type: LOAD_PRODUCT_DETAILS_STARTED,
  id,
});

export const loadProductDetailsSuccess = product => ({
  type: LOAD_PRODUCT_DETAILS_SUCCESS,
  product,
});

export const loadProductDetails = id => {
  return dispatch => {
    dispatch(loadProductDetailsStarted(id));
    contract.getProductById(id).then(rawStr => {
      dispatch(loadProductDetailsSuccess(Product.fromString(rawStr)));
    });
  };
};

export const productHasCommentsSuccess = hasComments => ({
  type: PRODUCT_HAS_COMMENTS_SUCCESS,
  hasComments,
});

export const productHasComments = id => {
  return dispatch => {
    contract.productHasComments(id).then(res => {
      // console.log(`Has comments: ${res}`);
      dispatch(productHasCommentsSuccess(res));
    });
  };
};
