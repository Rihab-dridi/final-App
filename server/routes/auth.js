const mongoose=require('mongoose');
const router= require('express').Router();
const bcrypt= require('bcrypt');
const User=require('../models/Auth');
const verify=require('../Midelwares/token')
const jwt=require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../Midelwares/validation');


//@route  http://localhost:5000/user/register
//@desc the user login
//@access Private


router.post('/register', async (req,res)=>{
    
    //take the user info from the front 
    const user= new User({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        card_number:req.body.card_number,
        email:req.body.email,
        image:req.file.path,
        password:hashedPassword
    });
    //validate the user 
    const {error} =registerValidation(req.body)
     if (error) return res.status(400).send(error.details[0].message);
 
    try {
        
        //make sure that the used email is not already used before 
    const emailExist= await User.findOne({email}) 
    if (emailExist) return res.status(400).send('the email is already exists')


    //hash the password
   const salt = await bcrypt.genSalt(10)
   const  hashedPassword= await bcrypt.hash(req.body.password, salt);

   //create a new user
    const newUser= await user.save();

     //create  token
     const token= jwt.sign({_id:newUser._id, role:newUser.role},"secretKey");
     res.status(200).json({result: newUser, token})

    } catch (error) {
        res.status(500).json({message:'cannot signup '})
    }
 
   
})

//@route  http://localhost:5000/user/login
//@desc the user login
//@access Private
router.post('/login', async (req,res)=>{
    const {email, password}= req.body
    const {error} =loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

try {
    //User
     //make sure that the used email is not already used before 
    const user= await User.findOne({email}) 
    if (!user) return res.status(400).send(`the email's  user doesn't exist `)

   // if the password is correct
   const validPass= await bcrypt.compare(password, user.password)
    
   if(!validPass) return res.status(400).send('invalid password')


   //create  token
   const token= jwt.sign({_id:user._id, role:user.role},"secretKey");
   res.status(200).json({result: user, token})
  // res.header('auth_token',token).send(token)
} catch (error) {
    console.log("something went wrong")
}
   
    
  
})



//@route http://localhost:5000/user/profile
//@desc Get authentified user
//@access Private
router.get('/user/profile', verify, (req, res) => {
    res.status(200).send({ user: req.user });
  });


  

//@route http://localhost:5000/user/add_to_favorite
//@desc Get authentified user
//@access Private, only student 
  router.put('/add_to_favorite',verify,  async (req, res) =>{
    try {
        const user = await User.findById(req.user._id)
        if(!user) return res.status(400).json({msg: "User does not exist."})
 
        mongoose.set('useFindAndModify', false)
        await User.findOneAndUpdate({_id: req.user._id},
             { $push: { favorite: req.body } }
        )
        // i need to make sure first that the book is nt alread added to the fav list before 
        return res.json({msg: `"${req.body.title}" is Added to your favorite list`})
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})


//@route http://localhost:5000/user/delete_a_favorite
//@desc Get authentified user
//@access Private, only student 
  router.put('/delete_a_favorite',verify,  async (req, res) =>{
    try {
        const user = await User.findById(req.user._id)
        if(!user) return res.status(400).json({msg: "User does not exist."})
 
        mongoose.set('useFindAndModify', false)
        await User.findOneAndUpdate({_id: req.user._id},
             { $pull: { favorite: req.body } }
        )
        
        return res.json({msg: `" ${req.body.title} " is deleted`})
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

router.get('/logout', async (req, res) =>{
  try {
      
  } catch (error) {
      
  }
})
module.exports=router;