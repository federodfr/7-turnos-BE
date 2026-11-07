import mongoose from 'mongoose'

const ServiceByBookingSchema = mongoose.Schema({
    service: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
})

const BookingSchema = mongoose.Schema({
    clientName: {
        type: String,
         required: true
    },
     clientEmail: {
        type: String,
        required: true
    },
    date: {
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
    },
    services: {
        type: [ServiceByBookingSchema],
        required: true
    },
})

export const BookingModel = mongoose.model('booking', BookingSchema)