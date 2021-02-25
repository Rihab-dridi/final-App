const express= require('express')
const fileUpload = require('express-fileupload');
const ConnectDB=require('./server/config/connectDB')
const booksRoutes=require('./server/routes/books')
const feildsRoutes=require('./server/routes/feilds')
 const studentsRoutes=require('./server/routes/students')
 const uploadRoutes=require('./server/routes/upload')
const authRoutes=require('./server/routes/Auth')
const newRoutes=require('./server/routes/new')

const app=express()
const port= process.env.port || 5000
//midelwares
app.use(fileUpload({debug:true}));
app.use(express.json())
//connect DB
ConnectDB()

  
  
//app.use('/user',authRoutes)
app.use('/new',newRoutes)
app.use('/students',studentsRoutes)
app.use('/books',booksRoutes)
app.use('/feilds',feildsRoutes)
app.use('/upload',uploadRoutes)
//app.use('/uploads', express.static(path.join(_dirname, './uploads' )));
app.listen(port,(err)=>err? console.log(err):console.log(`server is running on ${port}`))