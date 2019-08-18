import React, { Component } from "react";
import { store, deleteFromCart } from "./cart_functions";
import PaypalExpressBtn from "react-paypal-express-checkout";
import SHOPPINGCART from "../assets/svg/cart";
import RUBISHBIN from "../assets/svg/rubish_bin";
// import Checkout from '../pages/checkout';

class ViewCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      showCart: "",
      showCartOverlay:""
    };
    this.client = {
      sandbox: process.env.REACT_APP_PAYPAL_DEVELOPMENT_CODE,
      production: process.env.REACT_APP_PAYPAL_PRODUCTION_CODE
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      let viewCart = store.getState();
      this.setState({
        items: viewCart.shoppingCart.cart
      });
    });
  }

  onSuccess = payment => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onCancel = data => {
    // User pressed "cancel" or close Paypal's popup!
    console.log("The payment was cancelled!", data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  };

  onError = err => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  };

  deleteProduct(name) {
    store.dispatch(deleteFromCart(name));
  }

  toggle() {
    this.setState(
      this.state.showCart === "view-cart-box-show"
        ? {
            showCart: "",
            showCartOverlay: ""
          }
        : {
            showCart: "view-cart-box-show",
            showCartOverlay: "show-cart-overlay"
          }
    );
  }

  hideCart = () => {
    this.setState({showCart: "", showCartOverlay: ""})
  }

  cartTotal() {
    this.total = this.state.items
      .reduce((a, b) => a + b.price * b.quantity, 0)
      .toFixed(2);
    return parseFloat(this.total);
  }

  addOne(name, quantity) {
    let newQuantity = quantity + 1;
    this.state.items.map((item, index) => {
      if (this.state.items[index].product == name) {
        this.state.items[index].quantity = newQuantity;
        this.forceUpdate();
      }
    });
  }

  removeOne(name, quantity) {
    let newQuantity = quantity - 1;
    if (newQuantity < 1) {
      this.deleteProduct(name);
    }
    this.state.items.map((item, index) => {
      if (this.state.items[index].product == name) {
        this.state.items[index].quantity = newQuantity;
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
      <section>
        {this.state.items.length > 0 ? (
          <button
            className="view-cart-btn btn btn-default"
            id="view-cart-btn"
            onClick={this.toggle.bind(this)}
          >
            <SHOPPINGCART/> {this.state.items.length}
          </button>
        ) : (
          ""
        )}
        <div className={`view-cart-box z-depth-2 ${this.state.showCart}`}>
          <div className="container">
            <button
              type="button"
              className="close"
              onClick={this.toggle.bind(this)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="clearfix">&nbsp;</div>
            {this.state.items.map((item, index) => (
              <div key={index}>
                <div className="clearfix">&nbsp;</div>
                <div className="row">
                  <div className="col-4">
                    <img src={item.images[0]} className="img-fluid" />
                  </div>
                  <div className="col-8">
                    <div>
                      <span className="view-cart-product">{item.product}</span>
                      <br />
                      <button
                        className="btn btn-default quantity-btn"
                        onClick={() =>
                          this.removeOne(item.product, item.quantity)
                        }
                      >
                        -
                      </button>
                      &nbsp;&nbsp;
                      <span className="view-cart-quantity">
                        {item.quantity}
                      </span>
                      &nbsp;&nbsp;
                      <button
                        className="btn btn-default quantity-btn"
                        onClick={() => this.addOne(item.product, item.quantity)}
                      >
                        +
                      </button>
                      <br />
                      <span className="view-cart-product">
                        £{item.price.toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="btn btn-info view-cart-delete"
                      onClick={() => this.deleteProduct(item.product)}
                    >
                      <RUBISHBIN/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="view-cart-total">
              <div className="clearfix">&nbsp;</div>
              <p>Total: £{this.cartTotal().toFixed(2)}</p>
              <div className="paypal-btn">
                {/* <PaypalExpressBtn client={this.client} currency={'GBP'} total={this.cartTotal()} onCancel={this.onCancel} onError={this.onError} onSuccess={this.onSuccess} />         */}
              </div>
              {/* <button className="checkout-btn mx-auto d-block btn btn-info">Checkout</button> */}
            </div>
          </div>
        </div>
        <div id="cart-overlay" className={this.state.showCartOverlay} onClick={this.hideCart.bind(this)}></div>
      </section>
    );
  }
}

export default ViewCart;
