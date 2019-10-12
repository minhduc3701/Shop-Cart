import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../constants/Message";

class CartContainer extends React.Component {
  showCartItem = cart => {
    let result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item}></CartItem>;
      });
    }
    return result;
  };

  showTotalAmount = cart => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}></CartResult>;
    }
    return result;
  };

  render() {
    let { cart } = this.props;
    console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(
  //connect voi store
  mapStateToProps,
  null
)(CartContainer);

// kiem tra kieu du lieu truyen vao props
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};
