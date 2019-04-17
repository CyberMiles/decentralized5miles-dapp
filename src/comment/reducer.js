import {
  LOAD_COMMENT_DETAILS_STARTED,
  LOAD_COMMENT_DETAILS_SUCCESS,
  LOAD_COMMENT_LIST_STARTED,
  LOAD_COMMENT_LIST_SUCCESS,
} from './actionTypes';

const initialState = () => ({
  commentList: [],
  comment: null,
  commentStatus: 'LOADING',
  commentListStatus: 'LOADING',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_COMMENT_DETAILS_STARTED: {
      return { ...state, commentStatus: 'LOADING' };
    }
    case LOAD_COMMENT_DETAILS_SUCCESS: {
      return { ...state, commentStatus: 'LOADED', comment: action.comment };
    }
    case LOAD_COMMENT_LIST_STARTED: {
      return { ...state, commentListStatus: 'LOADING' };
    }
    case LOAD_COMMENT_LIST_SUCCESS: {
      return { ...state, commentListStatus: 'LOADED', commentList: action.commentList };
    }
    default:
      return state;
  }
};
