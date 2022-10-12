import { Schema } from "mongoose";
import mongoose from "mongoose";

const ProductModel = new Schema({
    name: {
        type:String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
    },
    quantity: {
        type:Number,
        required: true,
    }
},
    { timestamps: true })

export default mongoose.model('Product', ProductModel)