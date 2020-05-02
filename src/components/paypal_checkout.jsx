import React, { Component } from "react";
// import makeAsyncScriptLoader from "react-async-script";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Axios from "axios";

class PaypalCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    } 
    this.client = {
      sandbox: process.env.REACT_APP_PAYPAL_DEVELOPMENT_CODE,
      production: process.env.REACT_APP_PAYPAL_PRODUCTION_CODE
    };
    if (process.env.NODE_ENV === 'production') {
      this.paypalEnv = "production";
    } else {
      this.paypalEnv = "sandbox";
    }        
  }

  componentDidUpdate(prevProps){
    if(prevProps.items !== this.props.items){
      this.setState({
        items: this.props.items     
      })
    }    
  }  

  onSuccess = payment => {
    console.log("The payment was succeeded!", payment);
  };

  onCancel = data => {
    console.log("The payment was cancelled!", data);
    let formData = `name='sent'`;
    console.log(formData)
    console.table(this.state.items)
    Axios.post('https://us-central1-lilfimokeyrings.cloudfunctions.net/paypalMailer', formData)
    .then((response) => {
      console.log(response)
    })    
    .catch(error => {
        console.log(error);
    });    
  };

  onError = err => {
    console.log("Error!", err);
  };  


  render() {
    return (
      <section>
        <PaypalExpressBtn env={this.paypalEnv} client={this.client} currency={'GBP'} total={this.props.total} onCancel={this.onCancel} onError={this.onError} onSuccess={this.onSuccess} />
      </section>
    )
  }  

}

export default PaypalCheckout

// export default makeAsyncScriptLoader(`https://www.paypal.com/sdk/js?client-id=${process.env.REACT_APP_PAYPAL_DEVELOPMENT_CODE}`)(PaypalCheckout) 