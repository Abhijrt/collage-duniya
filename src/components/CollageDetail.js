import React, { Component } from "react";
import "../assets/css/collagedetail.css";

export default class CollageDetail extends Component {
  render() {
    const { collage } = this.props;
    // var element = collage.famous_nearest_places;
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="img-blur">
            {/* <div className="promoted">PROMOTED</div> */}
          </div>
          <div>
            {collage.promoted ? <div className="promoted">PROMOTED</div> : null}
            <div className="arrow"></div>
            <div className="rating">
              <span className="out">{collage.rating}</span>
              <span className="out-off">/5</span>
              <br />
              <span className="remark">{collage.rating_remarks}</span>
            </div>
            <span className="collage-tag">{collage.tags[0]}</span>
            <span className="path-tag">{collage.tags[1]}</span>
            <span className="ranking">#{collage.ranking}</span>
          </div>
        </div>
        <div className="bottom-container">
          <h4 className="collage-name">{collage.college_name}</h4>
          {/* {arr.map((item) => {
            return <i className="fa fa-star icon-star"></i>;
          })} */}
          <i className="fa fa-star icon-star"></i>
          <div className="collage-address">
            <span className="street">{collage.nearest_place[0]}</span>
            <span className="path"> | {collage.nearest_place[1]}</span>
          </div>
          <div className="path-match">
            <span className="match">93%Match : </span>
            <span className="near-path">
              {/* <strong style={{ color: "black" }}>2.5kms </strong> */}
              {collage.famous_nearest_places}
              {/* <strong style={{ color: "black" }}>7 Kms</strong> */}
              {/* {collage.famous_nearest_places[1]} */}
            </span>
          </div>
          <div className="discount">
            <span className="upto">{collage.offertext}</span>
          </div>
          <div className="fee-discount">
            <span className="original-fee">
              <i className="fa fa-rupee icon"></i>
              {collage.original_fees}
            </span>
            <span className="original-discount">
              <span className="org-dsc"> . {collage.discount}</span>
            </span>
          </div>
          <div className="fee-container">
            <span className="fee">
              <i className="fa fa-rupee icon-rupee"> </i>
              {collage.discounted_fees}
            </span>
            <span>{collage.fees_cycle}</span>
          </div>
          <div className="benefit">
            {collage.amenties[0]} . {collage.amenties[1]}
          </div>
        </div>
      </div>
    );
  }
}
