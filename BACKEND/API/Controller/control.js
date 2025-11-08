import { Tech } from "../Models/LanguageShema.js"; 

const IntroApi = async (req, res) => {
    res.status(200).json({
        message: "Welcome to languages API !",
        to_do: [
            {
                title: "You can get all the languages that are present in our dataset",
                method: "GET",
                url: "http://localhost:27017/api/techs/allLanguages",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can a random language that is present in our data set",
                method: "GET",
                url: "http://localhost:27017/api/techs/RandomLanguages",
                expectedResult: "[objects]/null"
            },
            {
                title: "You can filter languages based on Scope, Difficulty, Duration",
                method: "GET",
                url: "http://localhost:27017/api/techs/Filters?scope=***&difficulty=***&duration=***",
                expectedResult: "object/[objects]/null",
                expectedFilter: [
                    {
                        scope: ["Web Development","Frontend","Backend","Full Stack","Data Science", "AI", "Automation", "Android Development", "Enterprise Apps", "Embedded Systems", "OS Development", "Low-level Programming", "Game Development", "Competitive Programming", "System Software", "Desktop Apps", "Web Apps", "CMS", "Cloud Services", "System Programming", "Blockchain", "WebAssembly", "Cross-Platform Apps", "Statistics", "Machine Learning", "Big Data", "Functional Programming", "Bioinformatics", "Linux Admin", "DevOps", "Databases", "Data Analysis", "Big Data", "Web Design", "UI/UX", "SSR Apps", "APIs", "Database", "Cloud", "CI/CD", "Infrastructure", "Enterprise", "AI", "Data Engineering", "Deep Learning", "Computer Vision", "Robotics", "Data Visualization", "Analysis", "3D Modeling", "Game Design", "Animation", "Version Control", "Collaboration", "Automation", "Configuration Management", "Cloud Infrastructure", "System Administration", "Security", "Windows Admin", "Scripting", "Web3", "Finance", "Smart Contracts", "Blockchain Development", "Frontend Integration", "3D Web", "Graphics", "Frontend ML", "Desktop Apps", "Rust Development", "Build Tools", "Bundling", "Optimization", "Code Quality", "Code Formatting", "Testing", "Assertions", "Frontend Testing", "BI", "Analytics", "Search Engines", "Data Indexing", "Caching", "Message Queues", "Microservices", "Web Servers", "Load Balancing", "Hosting", "Cybersecurity", "Penetration Testing", "Networking", "Security Analysis", "LLM Apps", "Chatbots"

                        ]
                    },
                    { difficulty: ["Easy", "Medium", "Hard"] },
                    { duration: [1, 2, 3, 4,5], isIn: "months" },
                ]
            },
            {
                title: "You can search for a language using their ID (id).",
                method: "GET",
                url: "http://localhost:27017/api/techs/:id/details",
                expectedResult: "object/null"
            },
        ]
    })
}

  const GetAllLanguages= async(req,res)=>{
   try{
      let result= await Tech.find({})
      res.status(200).json({
        message:"Got all languages!",result
      })
   }catch(err){
     res.status(400).json(
        {
            message:"Couldn't fetch the languages",err
        }
     )
   }
  }
  const GetRandomLanguages=async(req,res)=>{
    try{
          let result= await Tech.find({})
          let RandomNo = Math.floor((Math.random() * 98 + 1))
          let randomresult=result[RandomNo]
          res.status(200).json({
         message:"Got random language successfully!",randomresult
        })

    }catch(err){
           res.status(400).json(
        {
            message:"Couldn't fetch the  random languages",err
        }
     )
   }
    }
  
    const GetIdBasedLanguage=async(req,res)=>{
       try{
         let {id} = req.params
         let idbasedresult=Tech.findOne({id: id})
          res.status(200).json({
         message:"Got id based language successfully!",idbasedresult
        })
    }catch(err){
            res.status(400).json(
        {
            message:"Couldn't fetch the id based languages",err
        }
     )
   } 
    }
  
    const GetFilterData=async(req,res)=>{
       try{
          let {scope,difficulty,duration}=req.query
          let usefilter = ""
          if(!scope && !difficulty && !duration){
            throw("Please enter valid query (scope/difficulty/duration")
          }

          if(scope){
            let scoperesult = Tech.find({scope :scope})
             res.status(200).json({
         message:"Got scope based language successfully!",scoperesult
        })
          }
          if(difficulty){
            let difficultyresult = Tech.find({difficulty :difficulty})
             res.status(200).json({
         message:"Got difficulty based language successfully!",difficultyresult
        })
          }
            if(duration){
            let durationresult = Tech.find({duration :duration})
             res.status(200).json({
         message:"Got duration based language successfully!",durationresult
        })
          }
    }catch(err){
             res.status(400).json(
        {
            message:"Couldn't fetch the filter based  languages",err
        }
     )
   }
    }
  
    const PostNewLanguage=async(req,res)=>{
       try{
           const { id, name, duration, difficulty, scope } = req.body
        const NewDoc = new Tech({ id, name, duration, difficulty, scope })
        await NewDoc.save();
        res.status(201).json({ message: "Successfully added the new document ", NewDoc })
    }catch(err){
              res.status(400).json(
        {
            message:"Couldn't add  the new languages",err
        }
     )
   }
    }
  
export {IntroApi,GetAllLanguages,GetRandomLanguages ,GetIdBasedLanguage,PostNewLanguage,GetFilterData}