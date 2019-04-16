import { LOAD_COMMENT_DETAILS, LOAD_COMMENT_LIST } from './actionTypes';
import ContractWrapper from '../utils/ContractWrapper';
import constants from '../constants/constants';

const initialState = () => ({
  commentList: [],
  comment: null,
});

const loadCommentDetails = (state, id) => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.OWNER_ADDRESS
  );
  const comment = contract.getCommentById(id);

  return { ...state, comment };
};

const loadCommentList = (state, productId) => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );
  const commentList = contract.getCommentsByProduct(productId);

  return { ...state, commentList };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_COMMENT_DETAILS: {
      return loadCommentDetails(state, action.id);
    }
    case LOAD_COMMENT_LIST: {
      return loadCommentList(state, action.productId);
    }
    default:
      return state;
  }
};
