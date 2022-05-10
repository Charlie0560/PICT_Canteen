import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
export default function Navbar() {
  const { dispatch , user} = useContext(AuthContext);


  const logout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };
  return (
    <>
      <div className="headerNav">
        <h1 data-text="PICT CANTEEN">PICT CANTEEN</h1>
        {/* <img src={logo} alt="" width="20%"/> */}
      </div>
      <div className="headeritems">
        <a href="/">
          <i class="fa-solid fa-house-chimney"></i>
        </a>
        <a href="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="/profile">
          <i class="fa-solid fa-user"></i>
        </a>
        <a href="/contactus">
          <i class="fa-solid fa-phone"></i>
        </a>
       {user.isAdmin === true && <a href="/canteen/admin">
          <i class="fa-solid fa-circle-plus"></i>
        </a>}
        <a href="/login" onClick={logout}>
          <i class="fa-solid fa-right-from-bracket"></i>
        </a>
      </div>
    </>
  );
}
