import mongoose from "mongoose";

const { Schema } = mongoose;

const MakerItem = new Schema({
    _id: {type: String},
    name: {type: String, required: true}, 
    img1: {type: String},
    img2:{type: String},
    price: {type: String},
    category: {type: Array},
    maker: {type: String}, 
    description: {type: String},
}, {timestamps: true});

const makeritem = mongoose.model("makeritems", MakerItem);

export default makeritem;