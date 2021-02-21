const mongoose= require('mongoose');


const userSchema= new mongoose.Schema({
    firstName:String ,
    lastName: String, 
    card_number: Number,
    year: String ,
    email:String,  
    phone:Number,
    favorite:{
        type:[{}],
        default:[]
    },
    image: {
        type: String,
        trim: true
    },
    role:{
        type: String,
         default:'user'
     },
     password:String,   
},

{
    timestamps: true
}
);


module.exports=User= mongoose.model('User',userSchema);