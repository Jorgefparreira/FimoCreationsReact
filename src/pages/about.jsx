import React, { Component } from "react";
import AVOCADO from "../assets/svg/avocado";
import MetaTags from "react-meta-tags";

class About extends Component {
  render() {
    return (
      <div className="container" id="aboutus">
        <MetaTags>
          <title>About us || Lil Fimo Creations</title>
          <meta
            name="description"
            content="I started making little keyrings out of fimo in 2014 to raise funds to fly to New York and attend The Musical Saw Festival in Astoria. I made the plane fare and enough to buy a new cello bow for my musical saw. It was pretty fun making the little guys too, so when I got back from New York I decided to keep going."
          />
        </MetaTags>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">About Us</h1>
            <div className="clearfix">&nbsp;</div>
          </div>
          <div className="xs-reverse">
            <div className="col-md-6 about-text">
              <p>Hi, I’m Anna. Welcome to Lil Fimo Creations.</p>
              <br />
              <p>
                I started making little keyrings out of fimo in 2014 to raise
                funds to fly to New York and attend The Musical Saw Festival in
                Astoria. I made the plane fare and enough to buy a new cello bow
                for my musical saw. It was pretty fun making the little guys
                too, so when I got back from New York I decided to keep going.
              </p>
              <br />
              <p>
                Now in my spare time I make keyrings, standing models, and
                jewellery out of fimo. Sometimes I attend conventions and craft
                fairs and sell them all there (see the events page). Children at
                comic con have started referring to me as The Keyring Lady or
                Fimo Girl which is pretty gratifying.{" "}
              </p>
              <br />
              <p>
                My favourite things to make are personalised keyrings/ models of
                pets, partners and original characters, so do hit me up if you
                want a custom order. No job too big or small (unless it is).
              </p>
            </div>
            <div className="col-md-6">
              <AVOCADO />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
