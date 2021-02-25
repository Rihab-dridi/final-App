const mongoose= require('mongoose');


const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phone:Number,
      favorite:{
          type:[{}],
          default:[]
      },
      image: {
          type: String,
          default:'https://www.bounche.com/assets/images/employees/default.png',
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