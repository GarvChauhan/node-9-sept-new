const express = require('express');
const router= express.Router();
const userController= require('../controllers/usercontroller');
router.get('/users',(req,res)=>{
    userController.getUser(req,res)
})
//localhost:3000/user/10
router.get('/user/:id',(req,res)=>{
    UserController.getParticularUser(req,res)
})
module.exports=router;