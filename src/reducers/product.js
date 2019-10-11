var initialState = [
  {
    id: 1,
    name: "Iphone 7",
    description: "Line New",
    price: 500,
    inventory: 10
  },
  {
    id: 2,
    name: "Iphone 8",
    description: "New",
    price: 700,
    inventory: 15
  },
  {
    id: 3,
    name: "Iphone 11",
    description: "New",
    price: 1000,
    inventory: 5
  }
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default product;
