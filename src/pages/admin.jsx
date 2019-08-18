import React, { Component } from "react";
import AddProduct from "./add_product";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Admin Area</h1>
            <div className="clearfix">&nbsp;</div>
            <div className="clearfix">&nbsp;</div>
            <div className="clearfix">&nbsp;</div>
          </div>
          <div className="col-3">
            <Link
              className="nav-link btn btn-info d-block mx-auto"
              to="/add-product"
            >
              Add Product
            </Link>
          </div>
          <div className="clearfix">&nbsp;</div>
          <div className="clearfix">&nbsp;</div>
        </div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <div className="clearfix">&nbsp;</div>
        <Route path="/add-product" component={AddProduct} />
      </div>
    );
  }
}

export default Admin;
