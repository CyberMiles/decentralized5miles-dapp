import { LOAD_COMMENT_LIST, LOAD_COMMENT_DETAILS } from './actionTypes';

export const loadCommentList = productId => ({
  type: LOAD_COMMENT_LIST,
  productId,
});

export const loadCommentDetails = id => ({
  type: LOAD_COMMENT_DETAILS,
  id,
});
