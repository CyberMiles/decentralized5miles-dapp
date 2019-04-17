import { LOAD_NUM_OF_PRODUCTS, LOAD_NUM_OF_COMMENTS, LOAD_RECENT_ITEMS } from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';

const initialState = () => ({
  numOfProducts: 0,
  numOfComments: 0,
  contractAddress: constants.CONTRACT_ADDRESS,
  recentItems: [],
});

const loadNumOfProducts = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.OWNER_ADDRESS
  );

  return { ...state, numOfProducts: contract.numOfProducts().toNumber() };
};

const loadNumOfComments = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return { ...state, numOfComments: contract.numOfComments().toNumber() };
};

const loadRecentItems = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  const recentItems = [];
  constants.RECENT_ITEM_IDS.forEach(id => {
    recentItems.push(contract.getProductById(id));
  });

  return { ...state, recentItems };
};

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
