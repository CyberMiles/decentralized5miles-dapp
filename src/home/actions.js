import {
  LOAD_NUM_OF_PRODUCT,
  LOAD_NUM_OF_COMMENT,
  LOAD_RECENT_ITEMS,
} from './actionTypes';

export const loadNumOfProduct = () => ({
  type: LOAD_NUM_OF_PRODUCT,
});

export const loadNumOfComment = () => ({
  type: LOAD_NUM_OF_COMMENT,
});

export const loadRecentItems = () => ({
  type: LOAD_RECENT_ITEMS,
});
