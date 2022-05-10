const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/orders");

dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to mongoDB");
  });
} catch (err) {
  console.log(err);
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
    )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST",
      "PUT",
      "DELETE",
      "GET"
      )
      return res.status(200).json({})
  }
  next()
})

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/orders",orderRoute);

if(process.env.NODE_ENV == "production"){
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
  })
}
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running!");
});
