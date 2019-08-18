import React from "react";
import { firebase } from "../Firebase";
class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      img1: "",
      img2: "",
      img3: "",
      description: "",
      price: "",
      type: ""
    };
    this.setRef = ref => {
      this.file = ref;
    }

  }

  updateInput = e => {
    this.setState({
      [e.target.id]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.img2]: e.target.value,
      [e.target.img3]: e.target.value,
      [e.target.description]: e.target.value,
      [e.target.price]: e.target.value,
      [e.target.type]: e.target.value
    });
  };

  uploadImage = event =>{
    const file = this.file.files[0];
    const storageRef = firebase.storage().ref();
    const image1 = storageRef.child(this.file.files[0].name)

    image1.put(file).then((snapshot) => {
      image1.getDownloadURL().then((url) =>{
        this.setState({img1:url.split("&")[0]})
      })
    })
  }

  addProduct = e => {
    e.preventDefault();
    const db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });
    // eslint-disable-next-line
    const itemRef = db.collection("items").add({
      id: this.state.id,
      name: this.state.name,
      images: [this.state.img1, this.state.img2, this.state.img3],
      description: this.state.description,
      price: parseFloat(this.state.price),
      type: this.state.type
    });
    this.setState({
      id: "",
      name: "",
      img1: "",
      img2: "",
      img3: "",
      description: "",
      price: "",
      type: ""
    });
    // ([e.target.id] = ""),
    // ([e.target.name] = ""),
    // ([e.target.img1] = ""),
    // ([e.target.img2] = ""),
    // ([e.target.img3] = ""),
    // ([e.target.description] = ""),
    // ([e.target.price] = ""),
    // ([e.target.type] = "");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <form onSubmit={this.addProduct} id="add-product-form">
              <div className="form-group">
                <input
                  type="text"
                  name="id"
                  placeholder="ID"
                  onChange={this.updateInput}
                  value={this.state.id}
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.updateInput}
                  value={this.state.name}
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="upload-img1-btn" className="upload-img-label btn btn-success">
                  <input id="upload-img1-btn" type="file" className="upload-img-btn" ref={this.setRef}/>
                  Img 1 Choose File
                </label> &nbsp;&nbsp;               

                <button className="btn btn-info" onClick={this.uploadImage.bind(this)}>Upload</button>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="img2"
                  placeholder="Image 2"
                  onChange={this.updateInput}
                  value={this.state.img2}
                  className="form-control"
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="img3"
                  placeholder="Image 3"
                  onChange={this.updateInput}
                  value={this.state.img3}
                  className="form-control"
                  autoComplete="off"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={this.updateInput}
                  value={this.state.description}
                  className="form-control"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={this.updateInput}
                  value={this.state.price}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  onChange={this.updateInput}
                  value={this.state.type}
                  className="form-control"
                  required
                />
              </div>

              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default AddProduct;
