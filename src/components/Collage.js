import React, { Component } from "react";
import CollageDetail from "./CollageDetail";
import { colleges } from "../colleges.json";

export default class Collage extends Component {
  render() {
    // console.log(colleges.length);
    return (
      <div className="collage-container">
        {colleges.map((collage, index) => {
          return <CollageDetail key={index} collage={collage} />;
        })}
      </div>
    );
  }
}
