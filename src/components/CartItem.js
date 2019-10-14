import React from "react";
import * as Messages from "../constants/Message";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  showSubToltal = (price, quantity) => {
    return price * quantity;
  };

  onDelete = product => {
    this.props.onDeleteProductInCart(product);
    this.props.onChangeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.setState({
        quantity: quantity
      });
      this.props.onUpdateProductInCart(product, quantity);
    }
  };

  render() {
    let { item } = this.props;
    let { quantity } = item; //item.quantity > 0 ? item : this.state;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary
                        btn-rounded waves-effect waves-light"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.showSubToltal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
