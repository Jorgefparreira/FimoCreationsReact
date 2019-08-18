import React, { Component } from "react";
import FACEBOOK from "../assets/svg/facebook";
import TWITTER from "../assets/svg/twitter";
import INSTAGRAM from "../assets/svg/instagram";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0
    };
  }

  componentDidMount() {
    const date = new Date();
    const year = date.getFullYear();
    this.setState({ year });
  }

  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row footer-row">
            <div className="col-md-6 col-sm-6 col-xs-7 social-media">
              <a
                href="https://www.facebook.com/lilfimokeyrings/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FACEBOOK></FACEBOOK>
              </a>
              <a
                href="http://www.thepicta.com/user/lilfimokeyrings/2532402094"
                target="_blank"
                rel="noopener noreferrer"
              >
                <INSTAGRAM></INSTAGRAM>
              </a>
              <a
                href="https://twitter.com/lilfimokeyrings?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TWITTER></TWITTER>
              </a>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-5" id="copyright">
              <p>&copy;Lil Fimo Creations {this.state.year}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
