import mongoose, { SchemaTypes } from 'mongoose'
const { Schema, model } = mongoose

const sellerSchema = new Schema({
    sellerName: {
            street: String,
            street_no: String,
            postcode: String
    },
    sellerAddress: {
        type: String,
        required: true,
    },
    sellerEmail:{
        type: String,
        minLength: 10,
        required: true,
        lowercase: true
    },
    sellerPhone: Number,
    url: String,
    itemsSold: [String],
    itemsForSale: [
        { 
            type:SchemaTypes.ObjectId,
            ref: 'MakerItem'
        }
    ],
    orders: {}
})

const Seller = model('Seller', sellerSchema)
export default Seller