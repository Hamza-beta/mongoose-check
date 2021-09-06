const Person=require("../models/person-prototype")
exports.AddContact =async (req,res)=>{
    const {name,email,age}=req.body
    try {
    const found=  await Person.findOne({email})
        if (found){
            return res.status(400).send({msg:"user exists"})
        } 
    const Addperson= new Person(req.body)
        await Addperson.save()
        res.status(200).send({msg:"added person",Addperson}) 
    } catch (error) {
        res.status(500).send({msg:"error while adding"})
        }}

exports.ListAllUsers = async (req,res)=>{
    try {
    const Persons= await  Person.find()
     res.status(200).send({msg:"list all users",Persons})
            } catch (error) {
                res.status(500).send({msg:"found no users"})
            }
         }
exports.DeleteUser= async (req,res)=>{
    const {ID} =req.params
    try {
    const deleteperson =  await Person.findByIdAndDelete(ID)
    res.status(200).send({msg:"user deleted"})
    }catch (error){
    res.status(500).send({msg:"can not delete user"})
    }
    }
exports.UpdateUser = async (req,res)=>{
const {ID}=req.params
try {
const updateperson = await Person.findByIdAndUpdate(ID,{$set:{...req.body}})
res.status(200).send({msg:"user updated",updateperson})
} catch (error) {
res.status(500).send({msg:"did not update user"})
}}

exports.ListId=async (req,res)=>{
const {ID}=req.params
try {
const personbyid = await Person.findById(ID)
res.status(200).send({msg:"found user by id",personbyid})
} catch (error) {
res.status(500).send({msg:"could not find user verify id"})
}}



