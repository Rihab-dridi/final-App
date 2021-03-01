const mongoose=require('mongoose')


const emailSchima= new mongoose.Schema({
    email:{
        type:String,
        required:true
    } 
},{
    timestamps: true
})
module.exports= Emails =mongoose.model('email', emailSchima)