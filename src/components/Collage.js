import React, { Component } from "react";
import CollageDetail from "./CollageDetail";
import { colleges } from "../colleges.json";

export default class Collage extends Component {
  constructor() {
    super();
    this.state = {
      index: 9,
      // yOffSet: 1587,
    };
    setInterval(() => {
      this.fetchOtherElement();
    }, 500);
  }

  fetchOtherElement = () => {
    const { index, yOffSet } = this.state;
    var container = document.getElementById("collage");
    var contentHeight = container.offsetHeight;
    var load = window.pageYOffset;
    var y = load + window.innerHeight;
    // console.log(yOffSet);
    if (y >= contentHeight) {
      this.setState({
        index: index + 10,
        // yOffSet: contentHeight,
      });
    }
  };

  render() {
    // console.log(colleges.length);
    return (
      <div className="collage-container" id="collage">
        {colleges.map((collage, index) => {
          if (index <= this.state.index) {
            return <CollageDetail key={index} collage={collage} />;
          }
          return null;
        })}
      </div>
    );
  }
}
