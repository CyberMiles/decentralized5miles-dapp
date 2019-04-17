import {
  LOAD_COMMENT_LIST_STARTED,
  LOAD_COMMENT_LIST_SUCCESS,
  LOAD_COMMENT_DETAILS_STARTED,
  LOAD_COMMENT_DETAILS_SUCCESS,
} from './actionTypes';
import constants from '../constants/constants';
import ContractWrapper from '../utils/ContractWrapper';
import MyComment from '../models/MyComment';

export const loadCommentListStarted = productId => ({
  type: LOAD_COMMENT_LIST_STARTED,
  productId,
});

export const loadCommentListSuccess = commentList => ({
  type: LOAD_COMMENT_LIST_SUCCESS,
  commentList,
});

export const loadCommentList = productId => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return dispatch => {
    dispatch(loadCommentListStarted(productId));
    contract.getCommentsByProduct(productId).then(commentIds => {
      const promises = commentIds.split('|').map(commentId => {
        return contract.getCommentById(commentId).then(rawStr => {
          return MyComment.fromString(rawStr);
        });
      });

      Promise.all(promises).then(commentList => {
        dispatch(loadCommentListSuccess(commentList));
      });
    });
  };
};

export const loadCommentDetailsStarted = id => ({
  type: LOAD_COMMENT_DETAILS_STARTED,
  id,
});

export const loadCommentDetailsSuccess = comment => ({
  type: LOAD_COMMENT_DETAILS_SUCCESS,
  comment,
});

export const loadCommentDetails = id => {
  const contract = new ContractWrapper(
    constants.WEB3_PROVIDER,
    constants.ABI,
    constants.CONTRACT_ADDRESS,
    constants.ONNER_ADDRESS
  );

  return dispatch => {
    dispatch(loadCommentDetailsStarted(id));
    contract.getCommentById(id).then(rawStr => {
      dispatch(loadCommentDetailsSuccess(MyComment.fromString(rawStr)));
    });
  };
};
