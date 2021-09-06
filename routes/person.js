const express=require('express')
const { AddContact, ListAllUsers, DeleteUser, UpdateUser, ListId } = require('../controllers/person_controllers')
const route=express.Router()

route.post('/', AddContact)

route.get('/', ListAllUsers)

route.delete('/:ID', DeleteUser)

route.put('/:ID', UpdateUser)

route.get('/:ID' ,ListId)














module.exports=route








