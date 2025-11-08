import { createClient } from "redis"
//redius: ye official libary hai node.js ke liye 
import dotenv from "dotenv"
//dotenv: ye .env file ke andar likhe environment variables ko load karta hai

dotenv.config ({ path: "./config.env"})

const redisClient = createClient({
    url: process.env.REDIS_URL
})
//redius client objrct banata hai jo srever se connect hota hai
//url mai redius server ka address reheta hai

redisClient.on("error", (err) => {
    console.log("redis error : ", err)
})
//ye error batayega 

try {
    await redisClient.connect();
    console.log("successfully conected to redis client !")
} catch (err) {
    console.log("unable connect to redis client : ", err)
}

export { redisClient }
