const mongoose=require('mongoose')
const booksSchema= require('./Books')

const feildSchima= new mongoose.Schema({
    name:{
       type: String ,
       required:true,
       unique:true 
    },
    id:Number,
    image:{
        type:String,
        default:'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
},
{
    timestamps: true
})
module.exports=feild=mongoose.model('feild', feildSchima)