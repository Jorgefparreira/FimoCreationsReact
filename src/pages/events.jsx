import React, { Component } from "react";
import MetaTags from "react-meta-tags";

class Events extends Component {
  render() {
    return (
      <div className="container" id="events">
        <MetaTags>
          <title>Events || Lil Fimo Creations</title>
          <meta
            name="description"
            content="Have a look here at where Fimo Creations is going to be in the coming months"
          />
        </MetaTags>
        <div className="short-container">
          <h3>Events</h3>
          <div className="row">
            <div className="col-md-6">
              <p>
                Have a look here at where Fimo Creations is going to be in the
                coming months.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={require("../assets/events.jpg")}
                className="img-fluid"
                alt="Convention table"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="clearfix">&nbsp;</div>
              <h4>Past Events</h4>
              <div className="clearfix">&nbsp;</div>
              <h5>18 and 19 of November 2017</h5>
            </div>
            <div className="col-md-8">
              <p>
                We'll be at the Birmingham MCM Comic Con with lots of our
                favorite characters and also taking custom requests to be made
                on the spot.
              </p>
              <p>
                More info at{" "}
                <a href="http://www.mcmcomiccon.com/birmingham/">
                  http://www.mcmcomiccon.com/birmingham/
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <img
                src={require("../assets/birminghamnovlogo.png")}
                className="img-fluid"
                alt="Birmingham MCM Comic Con"
              />
            </div>
          </div>
          <div className="row">
            <br />
            <div className="col-md-12">
              <div className="clearfix">&nbsp;</div>
              <h5>26 and 27 of November 2017</h5>
            </div>
            <div className="col-md-8">
              <p>
                We're excited be part of the Reading Comic Con so please come by
                and say hi!
              </p>
              <p>
                More info at{" "}
                <a href="https://www.facebook.com/events/540460952796174/">
                  https://www.facebook.com/events/540460952796174/
                </a>
              </p>
            </div>
            <div className="col-md-4 reading_con">
              <img
                src={require("../assets/reading_con.jpg")}
                className="img-fluid"
                alt="Reading Comic Con"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
