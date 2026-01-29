const mongoose=require("mongoose")
const User=require("./usermodels")
mongoose.connect( "mongodb://127.0.0.1:27017/mysudha").then(()=>{
    console.log("connection success ")
}).catch(()=>{
console.log("Error Connection")

})
const myinp=new User({
    sname:"sudha",
    age:30,
    addr:"no,5 Goundan Palayam,karur"

})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
console.log("error:",err)
})
