import * as types from "../constants/ActionType";

let data = JSON.parse(localStorage.getItem("CART"));
// let initialState = data ? data : [];
let initialState = [
  {
    product: {
      id: 1,
      name: "Iphone 7",
      description: "Line New",
      image:
        "https://bizweb.dktcdn.net/100/318/659/products/iphone7-black-select-2016.png?v=1564817226440",
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: "Iphone 11",
      description: "New",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
      price: 1000,
      inventory: 5,
      rating: 4
    },
    quantity: 2
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
