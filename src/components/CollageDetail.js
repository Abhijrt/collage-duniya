import React, { Component } from "react";
import "../assets/css/collagedetail.css";

export default class CollageDetail extends Component {
  render() {
    const arr = [1, 2, 3, 4, 5];
    return (
      <div className="main-container">
        <div className="top-container">
          <div className="img-blur"></div>
          <div>
            <div className="promoted">PROMOTED</div>
            <div className="rating">
              <span className="out">3.9</span>
              <span className="out-off">/5</span>
              <br />
              <span className="remark">Very Good</span>
            </div>
            <span className="collage-tag">Best Collage 2018</span>
            <span className="path-tag">2 km away</span>
            <span className="ranking">#7 in 260 colleges in north campus</span>
          </div>
        </div>
        <div className="bottom-container">
          <h4 className="collage-name">Hansraj College Delhi University - 1</h4>
          {/* {arr.map((item) => {
            return <i className="fa fa-star icon-star"></i>;
          })} */}
          <i className="fa fa-star icon-star"></i>
          <div className="collage-address">
            <span className="street">Near Vishwavidyalya Metro Station</span>
            <span className="path"> | 2 Kms away from bus stand</span>
          </div>
          <div className="path-match">
            <span className="match">93%Match : </span>
            <span className="near-path">
              <strong style={{ color: "black" }}>2.5kms </strong>from GTB Nagar,
              <strong style={{ color: "black" }}>7 Kms</strong>
              from Rajiv Chowk
            </span>
          </div>
          <div className="discount">
            <span className="upto">
              Flat Rs2,000 off + upto Rs 500 wallet! to avail... LOGIN
            </span>
          </div>
          <div className="fee-discount">
            <span className="original-fee">
              <i className="fa fa-rupee icon"></i>6000
            </span>
            <span className="original-discount">
              <span className="org-dsc">. 20</span>
            </span>
          </div>
          <div className="fee-container">
            <span className="fee">
              <i className="fa fa-rupee icon-rupee"> </i>
              2383
            </span>
            <span>Per semester(3 Months)</span>
          </div>
          <div className="benefit">Free Cancellation . Free Wi-Fi</div>
        </div>
      </div>
    );
  }
}
