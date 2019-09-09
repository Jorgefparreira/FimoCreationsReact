import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import BackButton from "../components/back_button";
import { Slide, RightArrow, LeftArrow } from "../components/slider";
import { store, addToCart } from "../components/cart_functions";
import { firebase } from "../Firebase";
import MetaTags from "react-meta-tags";

class Keyring extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("items");
    this.unsubscribe = null;
    this.state = {
      items: [],
      currentIndex: 0,
      translateValue: 0,
      addCartText: "Add to Cart"
    };
    this.match = props.match.params.keyringId;
  }

  static contextTypes = {
    router: () => null
  };  

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.items.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  onCollectionUpdate = querySnapshot => {
    const slideImages = [];
    const items = [];
    querySnapshot.forEach(doc => {
      const { name, description, price, id, images, type } = doc.data();
      items.push({
        key: doc.id,
        id,
        doc,
        name,
        images,
        type,
        description,
        price
      });
    });
    this.item = items.find(({ id }) => id === this.match);
    this.item.images = this.item.images.map((image, i) => {
      if(image != null){
        slideImages.push(image)
      }
      return slideImages
    });
    this.setState({
      items: this.item
    });
  };

  addCart(name, price, image) {
    store.dispatch(addToCart(name, 1, price, image));
    this.setState({ addCartText: "Added <i class='fas fa-check'></i>" });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {  
    return (
      <section>
        <div className="product-view-container z-depth-3">
          {this.state.items.images ? (
            <div className="container">
              <MetaTags>
                <title>{this.state.items.name} || Lil Fimo Creations</title>
                <meta
                  name="description"
                  content="Have a look here at where Fimo Creations is going to be in the coming months"
                />
              </MetaTags>
              <div className="row">
                <div className="col-md-6 slider-col">
                  <div className="slider">
                    <div
                      className="slider-wrapper"
                      style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: "transform ease-out 0.45s"
                      }}
                    >
                      {this.state.items.images.map((image, i) => (
                        <Slide key={i} image={image} />
                      ))}
                    </div>
                    {this.state.items.images.length > 1 ? (
                      <div>
                        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                        <RightArrow goToNextSlide={this.goToNextSlide} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <h2 className="h3">{this.state.items.name}</h2>
                  <div className="clearfix">&nbsp;</div>
                  <p
                    className="inner-product-description"
                    dangerouslySetInnerHTML={{
                      __html: this.state.items.description
                    }}
                  />
                  <div className="clearfix">&nbsp;</div>
                  <p>
                    Price: £{" "}
                    {this.state.items.price
                      ? this.state.items.price.toFixed(2)
                      : ""}
                  </p>
                  <p
                    tooltip="£2.80 delivery to United Kingdom"
                    className="plus-shipping shipping-tooltip"
                  >
                    Plus Shipping
                  </p>
                  <div className="product-bottom-btns">
                    <button
                      className="btn btn-info d-block add-cart-btn"
                      onClick={() =>
                        this.addCart(
                          this.state.items.name,
                          this.state.items.price,
                          this.state.items.images
                        )
                      }
                      dangerouslySetInnerHTML={{
                        __html: this.state.addCartText
                      }}
                    />
                    <Link to="/store">
                      <button className="btn btn-default product-back-btn">
                        Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Link to="/store"><div className="modal-background"/></Link>
      </section>
    );
  }
}

export default Keyring;
