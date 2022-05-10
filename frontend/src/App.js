import "./App.css";
// import { AddMenu } from "./components/AddMenu/AddMenu";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMess from "./components/SingleMess/SingleMess";
import CanteenAdmin from "./components/CanteenAdmin/CanteenAdmin";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Profile from "./components/Profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Cart from "./components/Cart/Cart";
import ContactUS from "./components/ContactUS/ContactUS";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {/* <AddMenu/> */}
      {/* <Navbar/> */}
      {/* <Trial/> */}
      {user ? (
        <Router>
          <Routes>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/mess" element={<SingleMess />} />
            <Route exact path="/canteen/admin" element={<CanteenAdmin />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contactus" element={<ContactUS />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
