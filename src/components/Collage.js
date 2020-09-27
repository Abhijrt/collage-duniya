import React, { Component } from "react";
import CollageDetail from "./CollageDetail";
import { colleges } from "../colleges.json";

export default class Collage extends Component {
  constructor() {
    super();
    this.state = {
      index: 9,
    };
    setInterval(() => {
      this.fetchOtherElement();
    }, 500);
  }

  fetchOtherElement = () => {
    const { index } = this.state;
    var container = document.getElementById("collage");
    var contentHeight = container.offsetHeight;
    var load = window.pageYOffset;
    var y = load + window.innerHeight;
    if (y >= contentHeight) {
      this.setState({
        index: index + 10,
      });
    }
  };

  render() {
    return (
      <div id="collage">
        <h1 className="heading">Collages in North India</h1>
        <div className="collage-container">
          {colleges.map((collage, index) => {
            if (index <= this.state.index) {
              return <CollageDetail key={index} collage={collage} />;
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}
