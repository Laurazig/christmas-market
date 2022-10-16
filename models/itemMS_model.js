import mongoose from "mongoose";

const { Schema } = mongoose;

const MakerItem = new Schema({
    _id: {type: String},
    name: {type: String, required: true}, 
    img1: String,
    img2: String,
    price: Number,
    category: [],
    maker: String, 
    description: String,
}, {timestamps: true});

const makeritem = mongoose.model("makeritems", MakerItem);

export default makeritem;