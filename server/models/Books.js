const mongoose=require('mongoose')
const rating=require('./Rating')

const bookSchima= new mongoose.Schema({
    title: String ,
    field:{
        type:Number,
        required:true},
    abstract:String,
    Link:{
        type:String,
        default:'unavailable'
    },
    grad_year: String,
    grad_student_name: String ,
    grad_student_email: String,
    selectedFile:String,
    rated_by:[String],
    image:{
        type:String,
        default:'https://0.academia-photos.com/attachment_thumbnails/43431195/mini_magick20190216-22931-1pps38u.png?1550311929'
    },
    

    likes:{
        type: [String],
        default: [],
    },
    rate: [Number],
    ratingCounter:{
        type:Number,
        default:0
    },
    totalRate: {
        type: [Number],
        default: []
    }
},

{
    timestamps: true
})
module.exports=book=mongoose.model('book', bookSchima)

