import mongoose from "mongoose";
import bcrypt from "bcrypt";
 
let addressObaject = {
    street: "", city: "", state :"", country :"", pincode :""
}
let emailObject = {
    userEmail : "", verified : false
}
 
let userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: Object,
        require: true,
        default: emailObject,
    },
    address: {
        type: String,
        require: true,
        default: addressObaject,
    },
    password: {
        type: String,
        require: true
    },
    timeStamp: {
        type: Date
    }
})
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
    this.timeStamp = Date.now()
})

let userModel = new mongoose.model("users", userSchema)

export { userModel }