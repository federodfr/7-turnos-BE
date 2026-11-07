import BookingsServices from "../services/bookings.service.js";
import {socketServer} from "../server.js" 

const bookingsServices = new BookingsServices();

export const getBookingByID = async(req, res) => {
    try {
        const booking = await bookingsServices.getBookingByID(req.params.bid);

        return res.status(200).json({
            status: "success",
            payload: booking
        })
        
    } catch(error) {
        return res.status(404).json({
            status: "error",
            message: error.message
        })
    }
}

export const createBooking = async(req, res) => {
    try {
        const booking = await bookingsServices.createBooking(req.body)
        .then(data => {
                socketServer.emit("changes-on-bookings", data)
        });

        return res.status(200).json({
            status: "success",
            payload: booking
        })

    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }
}

export const addServiceToBooking = async(req, res) => {
    try {

        const booking = await bookingsServices.addServiceToBooking(req.params)
        .then(data => {
            socketServer.emit("changes-on-bookings", data)
        });


        return res.status(200).json({
            status: "success",
            payload: booking
        })
      
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message
        })
    }

}