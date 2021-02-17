const mongoose=require('mongoose')

const ratingSchima= new mongoose.Schema({
    rated_book:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'books'
    },
    rate: Number,
    ratingCounter:{
        type:Number,
        default:0
    },
    totalRate:[]
    
},
{timestamps: true})
module.exports=rating=mongoose.model('rating', ratingSchima)