import axios from "axios";
import React, { useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import 'animate.css';

import "./allorder.css";
function AllOrders() {
  // const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await axios.get("/api/orders/");
      setItems(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //   console.log(res.data);
    };
    fetchCartItems();
  }, []);
  const handleDone = async (id) => {
    const data = {
      status: "Done",
    };
    try {
      await axios.put("/api/orders/order/" + id, data);
      // window.alert("Order Done");
      window.location.reload();
    } catch (err) {
      window.alert("Something Went's Wrong");
      console.log(err);
    }
  };
  return (
    <div className="allordertable">
      {/* <table class="table" style={{ color: "#D6D6D6" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Mobile Number</th>

            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Lunch</td>
            <td>7988656555</td>
            <td>70/-</td>
            <td>
              <i class="fa-solid fa-check"></i>Done
            </td>
          </tr>
        </tbody>
      </table> */}
      <table class="table" style={{ color: "#D6D6D6" }}>
        <thead>
          <tr className="animate__animated animate__fadeInDown">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Item</th>
            <th scope="col" className="mob">Mobile Number</th>

            <th scope="col">Amount</th>
            {/* <th scope="col">Status</th> */}
            <th scope="col"></th>
            <th scope="col">Confirm</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map(
              (i, x) =>
                (i.status === "placed" || i.status === "Done") && (
                  <tr className="animate__animated animate__fadeInDown">
                    <th scope="row">-</th>
                    <td>{i.username}</td>
                    <td>{i.item_name}</td>
                    {/* <td>{i.category}</td> */}
                    {/* <td>7988656555</td> */}
                    <td className="mob">{i.phone}</td>
                    <td>{i.item_price}</td>
                    <td></td>
                    <td>{i.status === "Done" ? <p style={{ "color": "green"}}>{i.status}</p> : i.status}</td>
                    <td>
                     {i.status !== "Done" && <button
                        style={{
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                        onClick={() => handleDone(i._id)}
                      >
                        Done
                      </button>}
                    </td>
                  </tr>
                )
            )}
        </tbody>
      </table>
    </div>
  );
}

export default AllOrders;
