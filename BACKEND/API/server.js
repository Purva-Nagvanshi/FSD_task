import express from "express"
import dotenv from "dotenv"
import {route} from "./Router/routes.js"
import "./Database/connectin.js"

const app = express()

dotenv.config({ path: "./config.env" })

let port = process.env.PORT;

 app.use(express.static("Public"))
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use("/api/techs",route)
 //end point
 app.get("/",(req,res)=>{res.status(301).redirect("/api/techs/Introapi")})

  app.use((request,response)=>{
   response.status(404).json({message :"content not found!"})
 })

  app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 })
