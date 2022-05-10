import React from "react";
import "./canteenitems.css";
import img from "./canteen.jpeg";

export default function CanteenItems() {
  return (
    <div className="canteenitems">
      <img src={img} alt="" />
      <div className="itemdetails">
        <h3>Thali</h3>
        {/* <br /> */}
        <p className="price">80/-</p>
        <ul>
          <li>ALOO PALAK</li>
          <li>WHITE RICE</li>
          <li>CHAPATI</li>
          <li>SALAD</li>
        </ul>
      </div>
      <div className="order">
        <button>Order Now</button>
      </div>
    </div>
  );
}
