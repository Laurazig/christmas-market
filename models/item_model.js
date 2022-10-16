import mongoose from "mongoose";

const { Schema } = mongoose;

const Item = new Schema({
    type: {type: String, required: true}, 
    categories: [],
    name: {type: String, required: true}, 
    SKU: {type: String, required: true},
    img1: String,
    img2: String,
    maker: String, 
    colour: String,
    size: String,
    material: String,
    description: {type: String, required: true},
    price: Number,
}, {timestamps: true});

const item = mongoose.model("items", Item);

export default item;

 // Getting Started with MongoDB & Mongoose ODM (Object Data Modeling) Library
 //https://www.youtube.com/watch?v=bALyYC10ABw