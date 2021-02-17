const mongoose=require('mongoose')
const booksSchema= require('./Books')

const feildSchima= new mongoose.Schema({
    name:{
       type: String ,
       required:true,
       unique:true 
    },
    Books:[]
},
{
    timestamps: true
})
module.exports=feild=mongoose.model('feild', feildSchima)