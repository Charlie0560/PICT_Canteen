import React, { useState } from "react";
import AddItem from "../AddItem/AddItem";
import AllItems from "../AllItems/AllItems";
import AllOrders from "../AllOrders/AllOrders";
import Navbar from "../Navbar/Navbar";
import "./canteenadmin.css";

const CanteenAdmin = () => {
  const [canteen, setCanteen] = useState(false);
  const [allorders, setAllorders] = useState(true);
  const [createitems, setCreateitems] = useState(false);
  const [allitems, setAllitems] = useState(false);
  // const canteenfunc = () => {
  //   setCanteen(true);
  //   setAllitems(false);
  //   setAllorders(false);
  //   setCreateitems(false);
  // };
  const allorderfunc = () => {
    setCanteen(false);
    setAllitems(false);
    setAllorders(true);
    setCreateitems(false);
  };
  const createitemfunc = () => {
    setCanteen(false);
    setAllitems(false);
    setAllorders(false);
    setCreateitems(true);
  };
  const allitemsfunc = () => {
    setCanteen(false);
    setAllorders(false);
    setCreateitems(false);
    setAllitems(true);
  };
  const [category, setCategory] = useState("Morning Breakfast");
  return (
    <div>
      <Navbar />
      <div className="canteenadmindashboard">
        <div className="leftbar">
          <ul>
            {/* <li onClick={() => canteenfunc()}>Canteen</li> */}
            <li onClick={() => allorderfunc()}>All Orders</li>
            <li onClick={() => createitemfunc()}>Create Items</li>
            <li onClick={() => allitemsfunc()}>All Items</li>
          </ul>
        </div>
        <div className="rightbar">
          {allorders && <AllOrders />}
          {createitems && <AddItem />}
          {allitems && (
            <>
              <div className="categories my-3">
                <li>
                  <p
                    onClick={() => setCategory("Morning Breakfast")}
                    style={{ cursor: "pointer","color": "white" }}
                  >
                    Morning Breakfast
                  </p>
                </li>

                <p className="vline" style={{"color": "white"}}>|</p>
                <li>
                  <p
                    onClick={() => setCategory("Lunch")}
                    style={{ cursor: "pointer","color": "white" }}
                  >
                    Lunch
                  </p>
                </li>

                <p className="vline" style={{"color": "white"}}>|</p>
                <li>
                  <p
                    onClick={() => setCategory("Evening Breakfast")}
                    style={{ cursor: "pointer","color": "white" }}
                  >
                    Evening Breakfast
                  </p>
                </li>
                <p className="vline" style={{"color": "white"}}>|</p>
                <li>
                  <p
                    onClick={() => setCategory("Dinner")}
                    style={{ cursor: "pointer","color": "white" }}
                  >
                    Dinner
                  </p>
                </li>
                <p className="vline" style={{"color": "white"}}>|</p>

                <li>
                  <p
                    onClick={() => setCategory("Beverages")}
                    style={{ cursor: "pointer","color": "white" }}
                  >
                    Beverages
                  </p>
                </li>
              </div>
              <AllItems categoryname={category} />
            </>
          )}
          {canteen && <p>Canteen Info</p>}
        </div>
      </div>
    </div>
  );
};

export default CanteenAdmin;
