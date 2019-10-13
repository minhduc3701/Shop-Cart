import React from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import PropTypes from "prop-types";
import { actAddToCart, actChangeMessage } from "../actions/index";

class ProductsContainer extends React.Component {
  render() {
    let { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
    //truyen du lieu tu store vao Products qua props
  }
  showProducts = products => {
    //in ra cac Product Item
    let result = null;
    let { onAddToCart, onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            onAddToCart={onAddToCart}
            product={product}
            onChangeMessage={onChangeMessage}
          ></Product>
        );
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(
  //connect voi store
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);

// kiem tra kieu du lieu truyen vao props
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired
};
