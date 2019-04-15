import { LOAD_PRODUCT_DETAILS } from './actionTypes';

export const loadProductDetails = (id) => ({
  type: LOAD_PRODUCT_DETAILS,
  id,
});
