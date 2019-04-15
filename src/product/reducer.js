import { LOAD_PRODUCT_DETAILS } from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';

const initialState = () => ({
  product: null,
});

const getProductById = state => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.OWNER_ADDRESS
  );
  const numOfProducts = contract.call('getProductById', {});

  return { ...state, numOfProducts: numOfProducts.toNumber() };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_PRODUCT_DETAILS: {
      return getProductById(state);
    }
    default:
      return state;
  }
};
