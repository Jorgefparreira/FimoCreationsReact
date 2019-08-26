import React, { Component } from "react";
// import makeAsyncScriptLoader from "react-async-script";
import PaypalExpressBtn from "react-paypal-express-checkout";

class PaypalCheckout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: props.items,
    //   total: props.total
    // } 
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

  // componentDidUpdate(prevProps){
  //   if(prevProps.items !== this.props.items){
  //     this.setState({
  //       items: this.props.items,
  //       total: this.props.total      
  //     })
  //   }    
  // }  

  onSuccess = payment => {
    console.log("The payment was succeeded!", payment);
  };

  onCancel = data => {
    console.log("The payment was cancelled!", data);
    let formData = `name=${data.intent}&phone=${data.intent}&email=${data.intent}&message=${data.intent}`;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log("done");
      }
    };
    xhttp.open(
      "POST",
      "https://us-central1-lilfimokeyrings.cloudfunctions.net/app",
      true
    );
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(formData);    
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