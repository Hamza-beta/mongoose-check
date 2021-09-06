const mongoose=require('mongoose')
const Person= new mongoose.Schema(
    {
    name:{type:String,required:true },
    age:Number,
    email:String

})
module.exports=mongoose.model('person',Person)