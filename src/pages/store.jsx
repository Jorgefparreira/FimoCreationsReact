import React, { Component } from "react";
import MetaTags from "react-meta-tags";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Keyring from "./product_view";
import { firebase } from "../Firebase";
import "../styles/store.scss";
import MagGlass from "../assets/svg/mag_glass";

function scrollTop() {
  window.scrollTo(0, 0);
}

class Store extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("items");
    this.unsubscribe = null;
    this.state = {
      items: [],
      visible: 6,
      error: false,
      searchItem: "",
      type: "keyring"
    };
    this.loadMore = this.loadMore.bind(this);
  }

  onCollectionUpdate = querySnapshot => {
    const items = [];
    querySnapshot.forEach(doc => {
      const { name, description, price, id, images, type } = doc.data();
      items.push({
        key: doc.id,
        id,
        doc, // DocumentSnapshot
        name,
        images,
        type,
        description,
        price
      });
    });
    this.setState({
      items
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  searchStore(event) {
    this.setState({ searchItem: event.target.value.toLowerCase() });
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 6 };
    });
  }

  changeCategory(category) {
    this.setState({ type: category });
  }

  render() {
    return (
      <div className="container ">
        <MetaTags>
          <title>Store || Lil Fimo Creations</title>
          <meta
            name="description"
            content="Browse through all the Lil Fimo Creations."
          />
        </MetaTags>
        <nav className="store-nav">
          <div
            className="nav-category"
            id="category-keyring"
            onClick={e => this.changeCategory("keyring")}
          >
            KEYRINGS
          </div>
          <div
            className="nav-category"
            id="category-necklace"
            onClick={e => this.changeCategory("necklace")}
          >
            NECKLACES
          </div>
          <br />
          <br />
          <div className="nav-category"><MagGlass></MagGlass> SEARCH:</div>
          <input
            className="form-group"
            id="searchStore"
            onChange={this.searchStore.bind(this)}
          />
        </nav>

        <div className="row">
          {this.state.items
            .filter(item => item.type === this.state.type)
            .filter(item =>
              item.name.toLowerCase().includes(this.state.searchItem)
            )
            .slice(0, this.state.visible)
            .map((item, index) => {
              return (
                <div key={index} className="col-sm-6 col-md-4">
                  <div className="card product-card z-depth-3">
                    <Link className="thumbnail" to={`/store/${item.id}`}>
                      <img
                        onClick={scrollTop}
                        src={item.images[0]}
                        alt="{item.name}"
                        className="img-fluid"
                      />
                    </Link>
                    <div className="card-text">
                      <h2 className="product-title h4">{item.name}</h2>
                      <p>£{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          <Route path={`/store/:keyringId`} component={Keyring} />
        </div>
        {this.state.visible < this.state.items.length && (
          <button
            onClick={this.loadMore}
            type="button"
            className="btn btn-info load-more mx-auto d-block"
          >
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default Store;
