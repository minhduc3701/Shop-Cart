import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";

class ProductsContainer extends React.Component {
  render() {
    let { products } = this.props;
    return <Products products={products}></Products>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductsContainer);
