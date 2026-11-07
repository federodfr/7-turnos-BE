import express from "express";
import { engine } from "express-handlebars";
import __dirname from "./utils.js";
import servicesRouter from "./routes/services.router.js";
import bookingsRouter from "./routes/booking.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.engine('handlebars', engine());
app.use(express.static(__dirname + "/public"))

app.use(express.json());
app.use("/api/services", servicesRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/", viewsRouter)

app.use((req, res) => {
  return res.status(404).json({ error: "Ruta no encontrada" });
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "El body debe ser un JSON válido" });
  }

  return res.status(500).json({ error: err.message || "Error interno del servidor" });
});

export default app;
