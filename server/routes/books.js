const express=require('express')
const router=express.Router();
const User= require('../models/Auth');
const book=require('../models/Books')
//const rating=require('../models/Rating')
const verify= require('../Midelwares/token')
const hasAccess=require('../Midelwares/Access');


//test
//http://localhost:5000/books/
router.get('/',(req,res)=>{
    res.send("it should be working by now ")
})


//get books
//http://localhost:5000/books/all_books
//public
router.get('/all_books', async (req,res)=>{
   
    try {
        const All_books=await book.find()
        res.status(200).json(All_books)
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })






//Add books
//http://localhost:5000/books/add_books
//privet(coordinator only)
router.post ('/add_books',async (req,res)=>{
    const {title,field,Link,abstract,grad_year,grad_student_name,grad_student_email}=req.body
    const newBook=  new book({title,field,Link,abstract,grad_year,grad_student_name,grad_student_email})

    try {
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
      res.status(409).json({message:error.message})
    }
  })






// @ desc edit a given book
//http://localhost:5000/books/edit_book/<id>
//privet(coordinator only)
  router.put ('/edit_book/:_id', async (req,res)=>{
    const {_id}=req.params
    const {title,field,abstract,grad_year,grad_student_name,grad_student_email}=req.body
    try {
        const updatedBook=await book.findByIdAndUpdate({_id},{$set:{title,field,abstract,grad_year,grad_student_name,grad_student_email}})
        res.json(updatedBook)
    } catch (error) {
      console.log(error)
    }
  })




//delete a given book
//http://localhost:5000/books/delete_book
//privet ( only admin)
router.delete('/delete_book/:_id', async (req,res)=>{
    const {_id}=req.params
    try {
        const deleted_book=await book.findOneAndDelete({_id})
        res.status(200).json({message:"book deleted successfully"})
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })
  

//like a given book given book
 //http://localhost:5000/books/like/<id>
 //privet(students only)

router.put('/like/:_id',  async (req,res)=>{
  
  const {_id}=req.params
  const {userID} =req.body
  const likedBook= await book.findOne({_id})
  const liker= await User.findById(userID)
  try {
    if ({_id})
      { await book.findByIdAndUpdate({_id},
          {  $push: { likes:{userID}}
          }
        )
    } else null }
    catch (error) {
      console.log(error)
     }
     res.send(likedBook)
})
//unlike a given book given book
 //http://localhost:5000/books/unlike/<id>
 //privet(students only)

router.put('/unlike/:_id',  async (req,res)=>{
  
  const {_id}=req.params
  const {userID} =req.body
  const unlikedBook= await book.findOne({_id})
  const unliker= await User.findById(userID)
  try {
    if ({_id})
      { await book.findByIdAndUpdate({_id},
          {  $pull: { likes:{userID}}
          }
        )
    } else null }
    catch (error) {
      console.log(error)
     }
     res.send(unlikedBook)
})



  //@route http://localhost:5000/user/add_to_favorite
  //@desc Get authentified user
  //@access Private, only student 

    router.put('/rating/:_id',verify,hasAccess('user') , async (req, res) =>{
     const  {_id}=req.params
    
      try {
          const ratedBook = await book.findById({_id})
          if(!ratedBook) return res.status(400).json({msg: "the Book  does not exist."})
   
         // mongoose.set('useFindAndModify', false)
        
          await book.findOneAndUpdate({_id},
               { $push: { rate: req.body.rate },
                $push: { rated_by:req.user._id},
                ratingCounter: ratedBook.ratingCounter +1
               }
          )
          // i need to make sure first that the user didnt rate  before 
          //i can make a tab with the user ids and test it with req.user.id 
          //i'll make the average of the tab in the front 

          return res.json({msg: ` you rated ${ratedBook.title} by "${req.body.rate}" stars`})
          
      } catch (err) {
          return res.status(500).json({msg: err.message})
      }
  })











module.exports=router