const mongoose=require('mongoose')
const rating=require('./Rating')

const bookSchima= new mongoose.Schema({
    title: String ,
    field:String,
    abstract:String,
    grad_year: String,
    grad_student_name: String ,
    grad_student_email: String,
    selectedFile:String,
    rated_by:[String],
    

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

