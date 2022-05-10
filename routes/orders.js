const router = require("express").Router();
const Order = require("../models/Orders");
const User = require("../models/Users");


router.post("/",async(req,res)=>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// get all the orders

router.get("/",async(req,res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

// get personal cart

router.get("/:id",async(req , res)=>{
    try{
        const orders = await Order.find({userId: req.params.id})
        res.status(200).json(orders);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

router.delete("/:id",async(req,res)=>{
    const cartitem = await Order.findById(req.params.id);

    try{
        await cartitem.deleteOne();
        res.status(200).json("Item Deleted Successfully");
    }
    catch(err){
        res.status(500).json(err);
    }
})


// update ongoing orders




router.put("/:id",async(req , res)=>{
    try{
        const orders = await Order.find({userId: req.params.id})
        for(var i = 0;i<orders.length ; i++){
            await orders[i].updateOne({$set: req.body})
            
        }
        res.status(200).json(orders);
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})
// order findby id
router.put("/order/:id", async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
        await order.updateOne({ $set: req.body });
        res.status(200).json("the order has been updated");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;