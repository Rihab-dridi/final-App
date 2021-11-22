const router = require('express').Router();

// Require bcrypt
const bcrypt = require('bcrypt');

// Require the json web token
const jwt = require('jsonwebtoken');

// Require the User Schema
const User = require('../models/Auth');

const isAuth = require('../Midelwares/isAuth');

// const {
//   validator,
//   registerRules,
//   loginRules,
// } = require('../middlewares/validator');

//@route POST api/auth/register
//@desc Register new user
//@access Public
router.post('/register',
//  registerRules(), validator,
  async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    // Simple Validation
    /*  if (!name || !lastName || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields!' });
    } */
    // Check for existing user
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // Create new User
    user = new User({ name, lastName, email, password });

    // Create Salt & hash
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;

    // Save the user
    await user.save();

    // sing user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, "process.env.secretOrKey", {
      expiresIn: '7 days',
    });

    res.status(200).send({ msg: 'User registred with success', user, token });
  } catch (error) {
    console.log(error)
  }
});

//@route POST api/auth/login
//@desc Login User
//@access Public
router.post('/login',
//  loginRules(), validator,
  async (req, res) => {
  const { email, password } = req.body;
  try {
    //simple Validation
    /* if (!email || !password) {
      return res.status(400).send({ msg: 'Please enter all fields' });
    } */
    // Check for existing user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: 'Bad Credentials! email' });
    }
    //Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: 'Bad Credentials! password' });
    }

    // sing user
    const payload = {
      id: user._id,
    };

    const token = await jwt.sign(payload, 'process.env.secretOrKey', {
      expiresIn: '7 days',
    });

    res.send({ msg: 'Logged in with success', user, token });
  } catch (error) {
    res.status(500).send(error);
  }
});

//@route GET api/auth/user
//@desc Get authentified user
//@access Private
router.get('/user', isAuth, (req, res) => {
  res.status(200).send({ user: req.user });
});

// @route http://localhost:5000/user/fav/<id>
// @desc like a given book
//privet(coordinator only)
// router.put ('/fav:_id', isAuth, async (req,res)=>{
//   const {_id}=req.params
//   const {userID} =req.user
  
//   try {
//     const favBook= await book.findOne({_id})

//   if (userID)
//    { const liker= await User.findById(userID)
//     const tab=liker.favorite[0]
//     const index = liker.favorite.findIndex((_id) => _id === (req.params));
  
   
//       await User.findByIdAndUpdate(userID,
//         {  $push: { favorite:{_id}}
//         }
//       )
     
//       res.json(liker)
//   } else null} catch (error) {
//     console.log(error)
//   }
// })
router.put ('/fav/:_id', async (req,res)=>{
  const {_id}=req.params
  const {userID} =req.body
  const favBook= await book.findOne({_id})
  const liker= await User.findById(userID)
  const tab=liker.favorite
  try {
    if (userID)
      { await User.findByIdAndUpdate(userID,
          {  $push: { favorite:{_id}}
          }
        )
    } else null }
    catch (error) {
      console.log(error)
     }
  
        res.status(200).json({message:'the book is added to your list'})
        
// @route http://localhost:5000/user/delete_fav/<id>
// @desc delete a given book from the list
//privet

})
router.put ('/delete_fav/:_id', async (req,res)=>{
  const {_id}=req.params
  const {userID} =req.body
  const favBook= await book.findOne({_id})
  const liker= await User.findById(userID)
  const tab=liker.favorite
  try {
    if (userID)
      { await User.findByIdAndUpdate(userID,
          {  $pull: { favorite:{_id}}
          }
        )
    } else null }
    catch (error) {
      console.log(error)
     }
  
        res.send(console.log(tab))
        

})
module.exports = router;