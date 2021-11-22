const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


const connectDB = async () => {
    try {
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      await mongoose.connect(process.env.MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
     
      console.log('MongoDB connected...');
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDB;