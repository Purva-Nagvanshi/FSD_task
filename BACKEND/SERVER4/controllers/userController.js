import { userModel} from "../models/userSchema.js"
 let postHandleUserRegister = async (req, res) => {
    try{
        let { name, email, phone, address, password } = req.body
        
        if(!name || !email || !phone || !address || !password) throw("invalid/incomplete data!")

        let userExist = await userModel.findOne({ $or: [{ "email.userEmail": email }, { "phone": phone }] })

        if (userExist) throw ("duplicate email/phone please try again with different phone/email !")

        let emailObject = {
            userEmail: email, verified: false
        }

        let newUser = new userModel({ name, phone, email: emailObject, address, password })

        await newUser.save()

        console.log("user registred successfully !")

        res.status(202).json({ message: "user registered successfully !" })    

    }catch(err){
        console.log("enable to register",err)
        res.status(400).json({message: "enable to register!",err})
    }
 }
  

 export { postHandleUserRegister }
   




 // export const postHandleUserRegister = (req, res) => {
//   res.send("server is running!");
// };
