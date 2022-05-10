import React, { useState } from "react";
// import CanteenItems from "../CanteenItems/CanteenItems";
// import Mess from "../Mess/Mess";
import AllItems from "../AllItems/AllItems";


import "./middlehome.css";

export default function MiddleHome() {
  const [category, setCategory] = useState("Morning Breakfast");
  return (
    <div className="middlehome">
      {/* <img src={backimg} alt="" /> */}
      <div className="container middlecontainer">
        <h3>PICT Canteen</h3>
        <div className="itemcontainer ">
          <div className="categories my-3">
            <li>
              <p
                onClick={() => setCategory("Morning Breakfast")}
                style={{ cursor: "pointer" }}
              >
                Morning Breakfast <span>{">"}</span>
              </p>
            </li>

            <p className="vline">|</p>
            <li>
              <p
                onClick={() => setCategory("Lunch")}
                style={{ cursor: "pointer" }}
              >
                Lunch <span>{">"}</span>
              </p>
            </li>

            <p className="vline">|</p>
            <li>
              <p
                onClick={() => setCategory("Evening Breakfast")}
                style={{ cursor: "pointer" }}
              >
                Evening Breakfast <span>{">"}</span>
              </p>
            </li>
            <p className="vline">|</p>
            <li>
              <p
                onClick={() => setCategory("Dinner")}
                style={{ cursor: "pointer" }}
              >
                Dinner <span>{">"}</span>
              </p>
            </li>
            <p className="vline">|</p>

            <li>
              <p
                onClick={() => setCategory("Beverages")}
                style={{ cursor: "pointer" }}
              >
                Beverages <span>{">"}</span>
              </p>
            </li>
          </div>
          {/* <CanteenItems/> */}
          <AllItems categoryname={category} />
          {/* <br />
          <CanteenItems/>
          <br />
          <CanteenItems/>
          <br />
          <CanteenItems/>
          <br />
          <CanteenItems/>
          <br /> */}
        </div>
      </div>
    </div>
  );
}
