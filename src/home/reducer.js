import { LOAD_NUM_OF_PRODUCTS, LOAD_NUM_OF_COMMENTS, LOAD_RECENT_ITEMS } from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';

const initialState = () => ({
  numOfProducts: 0,
  numOfComments: 0,
});

const loadNumOfProducts = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.OWNER_ADDRESS
  );
  const numOfProducts = contract.call('numOfProducts', {});

  return { ...state, numOfProducts: numOfProducts.toNumber() };
};

const loadNumOfComments = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );
  const numOfComments = contract.call('numOfComments', {});

  return { ...state, numOfComments: numOfComments.toNumber() };
};

const loadRecentItems = state => ({
  ...state,
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_NUM_OF_PRODUCTS: {
      return loadNumOfProducts(state);
    }
    case LOAD_NUM_OF_COMMENTS: {
      return loadNumOfComments(state);
    }
    case LOAD_RECENT_ITEMS: {
      return loadRecentItems(state);
    }
    default:
      return state;
  }
};
