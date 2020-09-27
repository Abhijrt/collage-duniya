import React, { Component } from "react";
import "../assets/css/collagedetail.css";

export default class CollageDetail extends Component {
  render() {
    const { collage } = this.props;
    var arr = [1, 2, 3, 4, 5];

    // this logic for splitting the famous nearest place design
    var element = collage.famous_nearest_places.split(",");
    var firstElement = element[0].split("kms");
    var secondElement = element[1].split("Kms");

    // this logic is for solitting the offertext to design
    var discount = collage.offertext;
    var firstDiscount = discount.split("Rs");
    // console.log(firstDiscount);
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="img-blur">
            {/* <div className="promoted">PROMOTED</div> */}
          </div>
          <div>
            {collage.promoted ? <div className="promoted">PROMOTED</div> : null}
            {/* <div className="arrow"></div> */}
            <div className="top"></div>
            <div className="bottom"></div>
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
          <div className="stars">
            {arr.map((item) => {
              if (item <= collage.rating) {
                return (
                  <i
                    className="fa fa-star active"
                    aria-hidden="true"
                    key={item}
                  ></i>
                );
              } else {
                return (
                  <i
                    className="fa fa-star icon-star"
                    aria-hidden="true"
                    key={item}
                  ></i>
                );
              }
            })}
          </div>
          <div className="collage-address">
            <span className="street">{collage.nearest_place[0]}</span>
            <span className="path"> | {collage.nearest_place[1]}</span>
          </div>
          <div className="path-match">
            <span className="match">93%Match : </span>
            <span className="near-path">
              <strong style={{ color: "black" }}>{firstElement[0]}kms </strong>
              {firstElement[1]},
              <strong style={{ color: "black" }}>{secondElement[0]} Kms</strong>
              {secondElement[1]}
            </span>
          </div>
          <div className="discount">
            <span className="upto">
              {firstDiscount[0]} Rs
              <strong style={{ color: "#37b396" }}>
                {firstDiscount[1].substring(0, 5)}
              </strong>
              {firstDiscount[1].substring(5)}
              Rs
              <strong style={{ color: "#37b396" }}>
                {firstDiscount[2].substring(0, 4)}
              </strong>
              {firstDiscount[2].substring(4, 24)}
              <strong style={{ color: "#2aa1d5" }}>
                {firstDiscount[2].substring(24)}
              </strong>
            </span>
          </div>
          <div className="fee-discount">
            <span className="original-fee">
              <i className="fa fa-rupee icon"></i>
              {collage.original_fees}
            </span>
            <span className="original-discount">
              <span className="org-dsc">
                <span className="arrow"></span>
                <span className="dot"></span>
                {collage.discount}
              </span>
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
