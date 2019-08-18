import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import HOMEPAGESVG from "../assets/svg/homepageSVG";
import Store from "../pages/store";

class Homepage extends Component {
  // componentDidMount() {
  //   new Swiper(".swiper-container", {
  //     autoplay: {
  //       delay: 4000
  //     },
  //     speed: 700,
  //     loop: true
  //   });
  // }

  render() {
    return (
      <section id="homepage">
        <MetaTags>
          <title>Lil Fimo Creations</title>
          <meta
            name="description"
            content="I started making little keyrings out of fimo in 2014 to raise funds to fly to New York and attend The Musical Saw Festival in Astoria. I made the plane fare and enough to buy a new cello bow for my musical saw. It was pretty fun making the little guys too, so when I got back from New York I decided to keep going."
          />
        </MetaTags>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <HOMEPAGESVG />
              <Link to="/store"><button className="btn z-depth-3" id="homepage-store-btn">Go to Store</button></Link>
            </div>

            {/* <div className="col-md-8" id="intro-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                  <div className="swiper-slide"><Link to={`/store/bat`}><img src={require('../assets/bowtiedog2.jpg')} className="img-fluid" alt="Lil bowtie dog"></img></Link></div>
                  <div className="swiper-slide"><Link to={`/store/bat`}><img src={require('../assets/bat2.jpg')} className="img-fluid" alt="Lil hanging bat"></img></Link></div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div> 
          </div>
          <div className="clearfix d-block d-sm-none">&nbsp;</div>  */}
            {/* <div className="col-md-4" />
            <div className="col-md-4">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <Link to={`/store/elizabeth`}>
                      <img
                        src={require("../assets/elizabeth1.jpg")}
                        className="img-fluid"
                        alt="Lil Jeremy Corbyn"
                      />
                    </Link>
                  </div>
                  <div className="swiper-slide">
                    <Link to={`/store/cactus`}>
                      <img
                        src={require("../assets/cactus1.jpg")}
                        className="img-fluid"
                        alt="Lil Cactus"
                      />
                    </Link>
                  </div>
                </div>
                <div className="swiper-button-prev" />
                <div className="swiper-button-next" />
              </div>
            </div> */}
          </div>
        </div>
        <Route path="/store" component={Store} />
      </section>
    );
  }
}

export default Homepage;
