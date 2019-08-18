import React, { Component } from "react";
import { store } from "../components/add_to_cart";

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log(1);
      let viewCheckout = store.getState();
      console.log(viewCheckout);
      this.setState({
        items: viewCheckout.shoppingCart.cart
      });
    });
    console.log(this.state.items);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  // cartTotal() {
  //   return this.state.checkoutItems.reduce((a, b) => a + b.price, 0).toFixed(2);
  // }

  render() {
    return (
      <div className="container" id="checkout">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Checkout</h1>
            <div className="clearfix">&nbsp;</div>
            <div className="">
              {/* {this.state.checkoutItems.map((item) => <div><p>
                <span className="view-cart-product">{item.product}</span>
                <span className="view-cart-quantity">{item.quantity}</span>  
                <br></br>
                <span className="view-cart-product">£{item.price.toFixed(2)}</span></p>
              </div> )} */}
              {/* <div className="view-cart-total">
                <p>Total: £{this.cartTotal()}</p>
              </div>           */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
