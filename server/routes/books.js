const express=require('express')
const router=express.Router()
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



// @route http://localhost:5000/like/<id>
// @desc like a given book
//privet(coordinator only)
  router.put ('/like/:_id', async (req,res)=>{
    const {_id}=req.params
    const{ userID}=req.body
    try {
      const liked_book= await book.findOne({_id})
      const tab=liked_book.likes
      const index = liked_book.likes.findIndex((_id) => _id ===String(userID));

     if (index=== -1) {
      liked_book.likes.push(userID)
     }
     else{
      res.json("the ")
     }

     
        res.json(tab)
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

 

// //like a given book given book
// //http://localhost:5000/books/like/<id>
// //privet(students only)
// router.patch('/like/:id',verify, async (req,res)=>{
//     const {_id}=req.body
//     const userId= req.user._id
//     if (!userId) {
//       return res.json({ message: "Unauthenticated" });
//     }
//     try {
//         const liked_book= await book.findById(_id)
//         const index = liked_book.likes.findIndex((_id) => -id ===String(userId));

//         if (index === -1) {
//           liked_book.likes.push(userId);
//         } else {
//           liked_book.likes = liked_book.likes.filter((id) => id !== String(userId));
//         }
//         const updated_book=await book.findByIdAndUpdate(_id,liked_book, {new:true})
//         res.status(200).json((updated_book))
//     } catch (error) {
//       res.status(404).json({message:error.message})
//     }
//   })
/
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
               { $push: { rate: req.body.rate }, $push: { rated_by:req.user._id},ratingCounter: ratedBook.ratingCounter +1
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