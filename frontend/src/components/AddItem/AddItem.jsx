import React, { useContext, useState } from "react";
import "./additem.css";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

function AddItem() {
  // const [option, setOption] = useState("");
  const {user} = useContext(AuthContext)
  const [category, setCategory] = useState("");
  const [item_name, setItemname] = useState("");
  const [item_price, setItemprice] = useState(0);
  const [success, setSuccess ] = useState("");
  // const [inputList, setInputList] = useState([
  // { category: "", item_name: "", item_price: "" },
  // ]);

  // handle input change
  // const handleInputChange = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name] = value;
  //   setInputList(list);
  // };

  // handle click event of the Remove button
  // const handleRemoveClick = (index) => {
  //   const list = [...inputList];
  //   list.splice(index, 1);
  //   setInputList(list);
  // };

  // handle click event of the Add button
  // const handleAddClick = () => {
  //   setInputList([
  //     ...inputList,
  //     { category: "", item_name: "", item_price: "" },
  //   ]);
  // };
  const handlesubmit = async () => {
    // console.log(inputList)
    const inputitemdata = {
      category,
      item_name,
      item_price,
      userId: user._id
    };
    try {
      await axios.post("/api/product/", inputitemdata);
      setSuccess("Item Created Successfully")
      window.alert("Item Created Succefully");
    } catch (err) {
      console.log(err);
      
    }
  };
  return (
    <div className="additem">
      {/* <ToastContainer /> */}

      <form onSubmit={handlesubmit}>
        {/* {inputList.map((x, i) => {
        return ( */}
        <>
          <div className="inputitemsection">
            {/* <label for="exampleInputitem_price1" class="form-label">item_price address</label> */}

            {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
            <select
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Item Type
              </option>
              <option value="Morning Breakfast">Morning Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Evening Breakfast">Evening Breakfast</option>
              <option value="Dinner">Dinner</option>
              <option value="Beverages">Beverages</option>
            </select>
            <div>
              <input
                type="name"
                name="item_name"
                placeholder="Item Name"
                id="exampleInputPassword1"
                value={item_name}
                onChange={(e) => setItemname(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                type="name"
                name="item_price"
                placeholder="Item Price"
                id="exampleInputPassword1"
                value={item_price}
                onChange={(e) => setItemprice(e.target.value)}
                required
              />
            </div>
            {/* 
              <div>
                {inputList.length !== 1 && (
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={() => handleRemoveClick(i)}
                  >
                    -
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={handleAddClick}
                  >
                    +
                  </button>
                )}
              </div> */}
          </div>
          <button className="submitbtn">Submit</button>
        </>
        {/* })} */}
      </form>
      <p>{success}</p>
    </div>
  );
}

export default AddItem;
