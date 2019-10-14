import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Messages from "../constants/Message";
import * as Actions from "../actions/index";

class CartContainer extends React.Component {
  showCartItem = cart => {
    let {
      onDeleteProductInCart,
      onChangeMessage,
      onUpdateProductInCart
    } = this.props;
    let result = (
      <tr>
        <td>{Messages.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            onDeleteProductInCart={onDeleteProductInCart}
            key={index}
            item={item}
            onChangeMessage={onChangeMessage}
            onUpdateProductInCart={onUpdateProductInCart}
          ></CartItem>
        );
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: product => {
      dispatch(Actions.actRemoveProductCart(product));
    },
    onChangeMessage: message => {
      dispatch(Actions.actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(Actions.actUpdateProductCart(product, quantity));
    }
  };
};

export default connect(
  //connect voi store
  mapStateToProps,
  mapDispatchToProps
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
  ).isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired
};
