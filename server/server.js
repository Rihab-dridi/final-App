const express= require('express')
const mongoose=require('mongoose')
const ConnectDB=require('./config/connectDB')
const booksRoutes=require('./routes/books')
const feildsRoutes=require('./routes/feilds')
 const studentsRoutes=require('./routes/students')
 const uploadRoutes=require('./routes/upload')
const authRoutes=require('./routes/Auth')
const app=express()
const port= process.env.port || 5000
//midelwares
app.use(express.json())
//connect DB
ConnectDB()
//routes

app.use('/user',authRoutes)
app.use('/students',studentsRoutes)
app.use('/books',booksRoutes)
app.use('/feilds',feildsRoutes)
app.use('/upload',uploadRoutes)
//app.use('/uploads', express.static(path.join(_dirname, './uploads' )));
app.listen(port,(err)=>err? console.log(err):console.log(`server is running on ${port}`))