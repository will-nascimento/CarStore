import { Schema } from "mongoose";
import mongoose from "mongoose";

const CarModel = new Schema({
    brand: String,
    model: String,
    version: String,
    year: Number,
    mileage: Number,
    gearbox: String,
    price: Number
},
{timestamps:true})

export default mongoose.model('Car',CarModel)