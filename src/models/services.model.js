import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
})

export const ServiceModel = mongoose.model("services", ServiceSchema)