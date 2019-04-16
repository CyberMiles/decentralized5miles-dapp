import { LOAD_PRODUCT_DETAILS } from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';

const initialState = () => ({
  product: null,
});

const getProductById = (state, id) => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.OWNER_ADDRESS
  );
  const product = contract.getProductById(id);

  return { ...state, product };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_PRODUCT_DETAILS: {
      return getProductById(state, action.id);
    }
    default:
      return state;
  }
};
