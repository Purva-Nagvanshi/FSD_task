import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })
  async function connection() {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("connection database was successfull !")

    }catch(err){
        console.log("unable to connect  the database : ", err)
    }
  }

  connection()