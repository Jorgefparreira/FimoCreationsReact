import React, { Component } from "react";
import { auth, provider } from "../Firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {this.state.user ? (
              <button
                className="d-block mx-auto btn btn-info text-white"
                onClick={this.logout}
              >
                Log Out
              </button>
            ) : (
              <button
                className="d-block mx-auto btn btn-info text-white"
                onClick={this.login}
              >
                Log In
              </button>
            )}
            <div className="clearfix">&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
