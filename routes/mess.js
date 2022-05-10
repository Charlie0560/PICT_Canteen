const router = require("express").Router();
const Mess = require("../models/Mess");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, "uploads/");
    },
    filename: function(req,file, cb){
        cb(null, file.originalname);
    },

});
const upload = multer({storage: storage});

router.post("/",upload.single("img"),async(req,res)=>{
    const newMess = new Mess(req.body);
    try{
        const savedMess = await newMess.save();
        res.status(200).json(savedMess);
        console.log("Mess added successfully");
    }
    catch(err){
        console.log(err);
    }
});

// get all the mess
router.get("/",async(req,res)=>{
    try{
        const mess = await Mess.find(req.params.id);
        res.status(200).json(mess);
        // console.log(mess);
    }
    catch(err){
        console.log(err);
    }
});


// update mess
router.put("/:id",async(req,res)=>{
    try{
        const mess = await Mess.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        });
        res.status(200).json(mess);
        // console.log("Updated Successfully");
    }
    catch(err){
        console.log(err);
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        await Mess.findByIdAndDelete(req.params.id);
        res.status(200).json("Mess Has been deleted successfully");
    }
    catch(err){
        console.log(err);
    }
})
module.exports = router;
