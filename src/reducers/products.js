var initialState = [
  {
    id: 1,
    name: "Iphone 7",
    description: "Line New",
    image:
      "https://bizweb.dktcdn.net/100/318/659/products/iphone7-black-select-2016.png?v=1564817226440",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Iphone 8",
    description: "Line New",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-spgray-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795417557",
    price: 700,
    inventory: 15,
    rating: 5
  },
  {
    id: 3,
    name: "Iphone 11",
    description: "New",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-select-2019-family_GEO_EMEA?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567812929188",
    price: 1000,
    inventory: 5,
    rating: 4
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
