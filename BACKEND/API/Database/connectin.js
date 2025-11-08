import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" })

async function connect() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log("Connected successfully to the mongodb!")
    } catch (error) {
        console.log("Could't connect the database", error)
    }
}

connect()
