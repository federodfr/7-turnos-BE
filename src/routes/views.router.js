import { Router } from "express";
import {socketServer} from "../server.js"
import ServicesService from "../services/services.service.js"
import BookingsService from "../services/bookings.service.js";

const router = Router();

router.get("/services", async( req, res) => {
    const services = await new ServicesService().getServices();
    res.status(200).render("services", {services})
});

router.get("/bookings", async( req, res) => {
    const bookings = await new BookingsService().getBookings();
    res.status(200).render("bookings", {bookings})
});

export default router;
