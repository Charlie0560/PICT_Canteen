const mongoose = require("mongoose");
const MessSchema = new mongoose.Schema({
    messname: {
        type: String,
        required: true,
        unique: true
    },
    userId:{
        type: String
    },
    img:{
        type: String,
    },

    location:{
        type: String,
    },
    contact:{
        type: String
    }


},
{timestamps: true}
);

module.exports = mongoose.model("Mess",MessSchema);