const mongoose=require('mongoose')


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
    rates: [{}],
    image:{
        type:String,
        default:'https://0.academia-photos.com/attachment_thumbnails/43431195/mini_magick20190216-22931-1pps38u.png?1550311929'
    },
    

    likes:{
        type: [{}],
        default: [],
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

