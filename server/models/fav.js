const mongoose=require('mongoose')

const favoriteSchima= new mongoose.Schema({
    user_id:{
       type: String ,
       required:true,
       unique:true 
    },
    fav_books:[{}]
})
module.exports=favorite=mongoose.model('favorite', favoriteSchima)