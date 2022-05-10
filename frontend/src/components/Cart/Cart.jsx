import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../Navbar/Navbar";
import "./cart.css";
// import GooglePayButton from "@google-pay/button-react";

function Cart() {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await axios.get("/api/orders/" + user._id);
      setItems(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
      //   console.log(res.data);
    };
    fetchCartItems();
  }, [user._id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/orders/" + id);
      window.alert("Item Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Something Went's Wrong");
    }
  };
  var sum = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].status === "-") {
      sum += items[i].item_price;
    }
  }

  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["MASTERCARD", "VISA"],
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example",
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: "BCR2DN4T6C2Y7XLL",
  //     merchantName: "Chaitanya Lokhande",
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPriceLabel: "Total",
  //     totalPrice: "100.00",
  //     currencyCode: "USD",
  //     countryCode: "US",
  //   },
  // };
  const handlePlaced = () => {
    const data = {
      status: "placed",
    };
    try {
      for(var i = 0 ;i<items.length;i++){
        if(items[i].status === "-"){
          axios.put("/api/orders/order/"+ items[i]._id , data);
        }
      }
      // window.alert("Order Placed Successfully");
      window.location.reload();
    } catch (err) {
      window.alert("Something Went's Wrong");
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container" style={{ color: "white" }}>
        {items.length !== 0 ? (
          <>
            <table class="table" style={{ color: "#D6D6D6" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Category</th>
                  {/* <th scope="col">Mobile Number</th> */}

                  {/* <th scope="col">OTP</th> */}
                  <th scope="col" className="createdat">
                    Time
                  </th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map(
                  (i, x) =>
                    i.status === "-" && (
                      <tr className="animate__animated animate__fadeInDown">
                        <th scope="row">{x + 1}</th>
                        <td>{i.item_name}</td>
                        <td>{i.category}</td>
                        {/* <td>7988656555</td> */}
                        <td class="createdat">{Date(i.createdAt)}</td>
                        <td>{i.item_price}/-</td>
                        <td>{i.status}</td>
                        {/* <td> */}
                        {/* <button onClick={()=>addtoCart(i._id)} className="addtocartbtn">Add</button> */}
                        {/* </td> */}
                        {user._id === i.userId && (
                          <>
                            {" "}
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
                <tr>
                  <td>total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{ color: "lightgreen" }}>{sum}/-</td>
                  {/* <td style={{"color": 'lightgreen'}}>{items[0].item_price}/-</td> */}
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="paybtn" style={{ float: "right" }}>
              {/* <GooglePayButton
                onClick={handlePlaced}
                environment="TEST"
                buttonColor="black"
                buttonType="buy"
                buttonSizeMode="static"
                paymentRequest={paymentRequest}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("load payment data", paymentRequest);
                }}
                style={{ width: 240, height: 40 }}
              /> */}
              <button style={{ width: 140, height: 40 , "backgroundColor": "transparent", "color": "white"}} onClick={handlePlaced}>Confirm</button>
            </div>
          </>
        ) : (
          <div>
            <h1
              style={{ color: "gray", textAlign: "center", marginTop: "13%" }}
            >
              No Items Here
            </h1>
          </div>
        )}
        {/* <div className="userorders">{items.map((i) => i.item_name)}</div> */}
        <div className="placedcartitem">
        <hr />
          <h4>Placed</h4>
          <div className="placed">
            <table class="table" style={{ color: "#D6D6D6" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Type</th>
                  {/* <th scope="col">Mobile Number</th> */}

                  {/* <th scope="col">OTP</th> */}
                  <th scope="col">Price</th>
                  <th scope="col" className="createdat">
                    Time
                  </th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map(
                    (i, y=0) =>
                      i.status === "placed" && (
                        <tr className="animate__animated animate__fadeInDown">
                          <th scope="row">-</th>
                          <td>{i.item_name}</td>
                          <td>{i.category}</td>
                          {/* <td>7988656555</td> */}
                          <td>{i.item_price}</td>
                          <td class="createdat">{Date(i.createdAt)}</td>
                          <td>{i.status}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="placedcartitems my-5">
          <hr />
          <h4>Completed</h4>
          <div className="done">
            <table class="table" style={{ color: "#D6D6D6" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item</th>
                  <th scope="col">Type</th>
                  {/* <th scope="col">Mobile Number</th> */}

                  {/* <th scope="col">OTP</th> */}
                  <th scope="col">Price</th>
                  <th scope="col" className="createdat">
                    Time
                  </th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map(
                    (i, x) =>
                      i.status === "Done" && (
                        <tr className="animate__animated animate__fadeInDown">
                          <th scope="row">-</th>
                          <td>{i.item_name}</td>
                          <td>{i.category}</td>
                          {/* <td>7988656555</td> */}
                          <td>{i.item_price}</td>
                          <td class="createdat">{i.createdAt}</td>
                          <td>{i.status}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
