import React from "react";
import Footer from "../Footer/Footer";
// import Mess from '../Mess/Mess'
import MiddleHome from "../MiddleHome/MiddleHome";
import Navbar from "../Navbar/Navbar";
import TopHome from "../TopHome/TopHome";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <TopHome />
      <MiddleHome />
      {/* <Mess/> */}
      <Footer />
    </div>
  );
}
