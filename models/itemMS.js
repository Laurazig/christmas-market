import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {type: String, required: true}, 
    img1: {type: String, required: true},
    img2:String,
    price: mongoose.Decimal128,
    category: Array,
    maker: String, 
    description: {type: String, required: true},
}, {timestamps: true});

const Item = mongoose.model("items", itemSchema);

export default Item;