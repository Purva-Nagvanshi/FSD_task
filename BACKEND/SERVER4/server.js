import express, { Router } from "express"
import dotenv from "dotenv"
import "./database/connection.js"
import {userRouter} from "./routers/userRouter.js"

dotenv.config({path : "./config.env"})

const app = express()

let port = process.env.PORT||5040

app.use (express.json())

app.use (express.urlencoded({extended:true}))

app.use("/api/user",userRouter)

app.use((req,res) =>{
    res.status(404).json({
        message: "content of route page not found !"
    })
})

app.listen(port,() => {
    console.log(`server is running on port ${port}!`)
})
