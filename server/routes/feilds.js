const mongoose = require('mongoose');
const router=require('express').Router();
const Feild= require('../models/Feilds');
const Books= require('../models/Books');


//@route: http://localhost:5000/feilds/all_feilds
//@desc: get all the covered feilds
//@access: public

router.get('/all_feilds', async (req,res)=>{
   
    try {
        const All_feilds=await Feild.find()
        res.status(200).json(All_feilds)
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  })

  //@route: http://localhost:5000/feilds/add_feilds
//@desc: create a new feild
//@access: only admin

  router.post ('/add_feilds',async (req,res)=>{
    try {

    const {name,id}=req.body
    const feild = await Feild.findOne({name})
    if(feild) return res.status(400).json({msg: "This feild already exists."})

    const newFeild=  new Feild({name,id})

        await newFeild.save()
        res.status(201).json(newFeild)
    } catch (error) {
      res.status(409).json({message:error.message})
    }
  })


//@route: http://localhost:5000/feilds/delete_feilds/<id>
//@desc: delete a given  feild
//@access: only admin
  router.delete('/delete_feilds/:_id',async(req, res) =>{
    try {
        // const books = await Books.findOne({field: req.params._id})
        // if(books) return res.status(400).json({
        //     msg: "Please delete all books with a relationship."
        // })

        await Feild.findByIdAndDelete(req.params._id)
        res.json({msg: "feild deleted" })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})


//@route: http://localhost:5000/feilds/edit_feild/<id>
//@desc: edit a given  feild
//@access: only admin
router.put('/edit_feild/:_id', async(req, res) =>{
    try {
        const {name} = req.body;
        await Feild.findOneAndUpdate({_id: req.params._id}, {name})

        res.json({msg: "feild  Updated "})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

//@route: http://localhost:5000/feilds/book_feild/<id>
//@desc: edit a given  feild
//@access: only admin
router.put('/book_feild/:_id', async (req, res) =>{
  const  {_id}=req.params
 
   try {
       const book_feild = await Feild.findById({_id})
       if(!book_feild) return res.status(400).json({msg: "the fild  does not exist."})

       mongoose.set('useFindAndModify', false)
     
       await Feild.findOneAndUpdate({_id},
            { $push: { Books: req.body }}
       )
       // i need to make sure first that the user didnt rate  before 
       //i can make a tab with the user ids and test it with req.user.id 
       //i'll make the average of the tab in the front 

       return res.json({msg: ` you added ${req.body.title} to the' "${book_feild.name}" field`})
       
   } catch (err) {
       return res.status(500).json({msg: err.message})
   }
})


module.exports=router

