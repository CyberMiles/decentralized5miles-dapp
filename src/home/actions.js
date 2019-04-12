import { LOAD_NUM_OF_PRODUCTS, LOAD_NUM_OF_COMMENTS, LOAD_RECENT_ITEMS } from './actionTypes';

export const loadNumOfProducts = () => ({
  type: LOAD_NUM_OF_PRODUCTS,
});

export const loadNumOfComments = () => ({
  type: LOAD_NUM_OF_COMMENTS,
});

export const loadRecentItems = () => ({
  type: LOAD_RECENT_ITEMS,
});
