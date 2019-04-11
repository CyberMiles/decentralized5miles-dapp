import { LOAD_NUM_OF_PRODUCT, LOAD_NUM_OF_COMMENT } from './actionTypes';

const initialState = () => ({
  numOfProduct: 0,
  numOfComment: 0,
});

const loadNumOfProduct = () => {

};

export default (state = initialState(), action) => {
  switch (action.type) {
    case LOAD_NUM_OF_PRODUCT: {
      break;
    }
    case LOAD_NUM_OF_COMMENT: {
      break;
    }
    default:
      return state;
  }
};
