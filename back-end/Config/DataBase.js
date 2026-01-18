import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conectado ao mongoDB")
    } catch (error) {
        console.error("Erro ao se conectar ao mongodb", error.message)
        process.exit(1)
    }
}

export default connectDB


