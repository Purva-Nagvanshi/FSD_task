import express from "express"
import { IntroApi , GetAllLanguages, GetRandomLanguages ,GetIdBasedLanguage,PostNewLanguage,GetFilterData} from "../Controller/control.js"
 
const route = express.Router()

route.get("/",(request,response)=>{
   response.status(301).redirect("/api/techs/Introapi")
})

route.get("/IntroApi", IntroApi)

route.get("/allLanguages",GetAllLanguages)

route.get("/RandomLanguages",GetRandomLanguages)

route.get("/Filters",GetFilterData)

route.get("/:id/details",GetIdBasedLanguage)

route.post("/PostNewDocuments",PostNewLanguage)


export {route}