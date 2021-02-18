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


// router.get('/all_rates', async (req,res)=>{
   
//     try {
//         const All_ratings=await rating.find()
//         res.status(200).json(All_ratings)
//     } catch (error) {
//       res.status(404).json({message:error.message})
//     }
//   })






//Add books
//http://localhost:5000/books/add_books
//privet(coordinator only)
router.post ('/add_books',async (req,res)=>{
    const {title,field,abstract,grad_year,grad_student_name,grad_student_email}=req.body
    const newBook=  new book({title,field,abstract,grad_year,grad_student_name,grad_student_email})

    try {
        await newBook.save()
        res.status(201).json(newBook)
    } catch (error) {
      res.status(409).json({message:error.message})
    }
  })






  //edit a given book
//http://localhost:5000/books/edit_book/<id>
//privet(coordinator only)
//601d37eba50 0272b880278d5

  router.put ('/edit_book/:_id',async (req,res)=>{
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
router.delete('/delete_book/:_id',async (req,res)=>{
    const {_id}=req.params
    try {
        const deleted_book=await book.findOneAndDelete({_id})
        res.status(200).json({message:"book deleted successfully"})
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })


//like a given book given book
//http://localhost:5000/books/favoriteList/<id>
//privet(students only)
router.put('/favoriteList/:_id',async (req,res)=>{
    const {_id}=req.params
    try {
        const liked_book= await book.findById(_id)
        const updated_book=await book.findByIdAndUpdate(_id,{likes:liked_book.likes+1}, {new:true})
        res.status(200).json({message:"the book is added to your favorite list successfully"})
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })
//rate a given book given book
//http://localhost:5000/books/book_rate/<id>
// //privet(students only)
// router.post('/book_rate/:_id',async (req,res)=>{
//     const {rated_book}=req.params
//     const {rate}=req.body
    
//     const newRate=  new rating({rated_book: req.params,rate})

//     try {
//         await newRate.save()
//         res.status(201).json(newRate)
//       } catch (error) {
//         res.status(409).json({message:error.message})
//       }
//     })

   // /rate given book given book
//http://localhost:5000/books/rating/<id>
//privet(students only)
// router.put('/rating/:_id',verify,hasAccess('user'),async (req,res)=>{

//   const {_id}=req.params

//     try {

     
//         const ratedd_book= await rating.findOne({rated_book:_id})
       
        
//         const rating_book = await rating.findOneAndUpdate
//         const rattt=rating.aggregate([
//           { $project: { RateAvg: { $avg: "$rate"}} }
//        ])
//         // ({rated_book:_id},{$set:{ratingCounter:ratedd_book.ratingCounter+1, 
//         //    totalRate :rating.aggregate(
//         //     [
//         //       {
//         //         $group:
//         //           {
//         //             _id: "$rated_book",
//         //             avgRating: { $avg: "$rate" }
//         //           }
//         //       }
//         //     ]
//         //  )
//         //   }},
//         //    {new:true})
//         res.status(200).json(rattt)
//     } catch (error) {
//       res.status(404).json({message:error.message})
//     }
//   })



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