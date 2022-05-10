const router = require("express").Router();
const Product = require("../models/Product");
const User = require("../models/Users");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// create a product

router.post("/", upload.single("img"), async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
    console.log("Prduct added successfully");
    console.log(savedProduct);
  } catch (err) {
    console.log(err);
  }
});

// get all the products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(req.params.id);
    res.status(200).json(products);
    console.log(products);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    // if (product.userId === req.body.userId) {
    await product.deleteOne();
    res.status(200).json("Product has been deleted successfully");
    // } else {
    //   res.status(403).json("Something wents wrong");
    // }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
