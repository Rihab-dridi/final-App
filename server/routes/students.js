const express=require('express')
const router=express.Router()
const student=require('../models/Auth')



//get all the students
//http://localhost:5000/students/all_students
//privet(coordinator only )
router.get('/all_students',async (req,res)=>{
   
    try {
        const All_students=await student.find()
        res.status(200).json(All_students)
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })
module.exports=router