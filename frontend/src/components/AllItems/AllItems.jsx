import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./allitems.css";

import "animate.css";

function AllItems(props) {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("/api/product/");
      setItems(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchItems();
  }, [user._id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/product/" + id);
      // window.alert("Item Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Something Wents Wrong");
    }
  };

  const addtoCart = async (id) => {
    const data = {
      userId: user._id,
      username: user.username,
      phone: user.phone,
      category: id.category,
      item_name: id.item_name,
      item_price: id.item_price,
    };
    try {
      await axios.post("/api/orders", data);
      window.alert("Added to cart successfully");
    } catch (err) {
      window.alert("Something Wents Wrong");
    }
  };
  return (
    <div>
      {/* {items && (
          items.map((i) => <p>{i.category}</p> )
        )} */}
      <table class="table" style={{ color: "#D6D6D6" }}>
        <thead>
          <tr className="animate__animated animate__fadeInDown">
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Type</th>
            {/* <th scope="col">Mobile Number</th> */}

            {/* <th scope="col">OTP</th> */}
            <th scope="col">Price</th>
            <th scope="col" className="createdat">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map(
              (i, x) =>
                i.category === props.categoryname && (
                  <tr className="animate__animated animate__fadeInDown">
                    <th scope="row">-</th>
                    <td>{i.item_name}</td>
                    <td>{i.category}</td>
                    {/* <td>7988656555</td> */}
                    <td>{i.item_price}</td>
                    <td class="createdat">
                      {i.createdAt.toString()}
                    </td>
                    <td>
                      <button
                        onClick={() => addtoCart(i)}
                        className="addtocartbtn"
                      >
                        Add
                      </button>
                    </td>
                    {user._id === i.userId && (
                      <>
                        {" "}
                        <td>
                          <i
                            class="fa-solid fa-pen"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </td>
                        <td>
                          <i
                            class="fa-solid fa-trash"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(i._id)}
                          ></i>
                        </td>
                      </>
                    )}
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
}

export default AllItems;
