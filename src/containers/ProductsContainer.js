import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";

class ProductsContainer extends React.Component {
  render() {
    let { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
    //truyen du lieu tu store vao Products qua props
  }
  showProducts = products => {
    //in ra cac Product Item
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product}></Product>;
      });
    }
    return result;
  };
}

const mapStateToProps = state => {
  //lay du lieu tu store ve
  return {
    products: state.products
  };
};

export default connect(
  //connect voi store
  mapStateToProps,
  null
)(ProductsContainer);
