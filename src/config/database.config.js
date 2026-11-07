import mongoose from 'mongoose';
import config from './env.config.js'

export const connectDB = async() => {
    try {
       await  mongoose.connect(config.mongoURI)
        console.log("Conexion con la base de datos exitosa")
    } catch(error) {
        console.log("Error conectandose a la base de datos", error)
        process.exit(1)
    }
}