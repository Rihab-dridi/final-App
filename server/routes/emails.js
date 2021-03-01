const express=require('express')
const Emails = require('../models/Emails')
const router=express.Router()



//@route: http://localhost:5000/emails/email
//@desc: create a new feild
//@access: only admin

router.post ('/email_add',async (req,res)=>{
    try {

    const {email}=req.body

    const newEmail=  new Emails ({email})

        await newEmail.save()
        res.status(201).json(newEmail)
    } catch (error) {
      res.status(409).json({message:error.message})
    }
  })

  
//get books
//http://localhost:5000/books/all_books
//public
router.get('/all_emails', async (req,res)=>{
   
  try {
      const All_emails=await Emails.find()
     
      res.status(200).json(All_emails)
  } catch (error) {
    res.status(404).json({message:error.message})
  }
})
router.delete('/delete',async(req, res) =>{
  try {
      // const books = await Books.findOne({field: req.params._id})
      // if(books) return res.status(400).json({
      //     msg: "Please delete all books with a relationship."
      // })

      await Emails.deleteMany()
      res.json({msg: "all deleted" })
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
})


  module.exports=router