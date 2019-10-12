import * as types from "../constants/ActionType";

export const addToCart = (product, quatiny) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quatiny
  };
};
