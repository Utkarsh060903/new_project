import mongoose, { mongo } from "mongoose";

const busSchema = new mongoose.Schema({
    count :{
        type: Number,
        default: 0,
        required: true
    },

    source: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    }
})

const BusModel = mongoose.model("BusModel" , busSchema)

export default BusModel