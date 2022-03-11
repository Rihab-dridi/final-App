require('dotenv').config()
const express= require('express')
const fileUpload = require('express-fileupload');
const cors=require('cors')

const ConnectDB=require('./config/connectDB')
const booksRoutes=require('./routes/books')
const feildsRoutes=require('./routes/feilds')
const emailsRoutes=require('./routes/emails')
 const studentsRoutes=require('./routes/students')
 const uploadRoutes=require('./routes/upload')
const newRoutes=require('./routes/new')
const app=express()
const port= process.env.PORT || 5000
//midelwares
cors()
app.use(fileUpload());
app.use(express.json())
//connect DB
ConnectDB()

app.post('/upload', (req, res) => {
    if (req.files == null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/client/public/upload/${file.name}`, err => {
        
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      
      res.json({ fileName: file.name, filePath: `/upload/${file.name}` });
      
    });
  });

  
  

app.use('/new',newRoutes)
app.use('/students',studentsRoutes)
app.use('/books',booksRoutes)
app.use('/feilds',feildsRoutes)
app.use('/emails',emailsRoutes)
app.use('/upload',uploadRoutes)
//app.use('/uploads', express.static(path.join(_dirname, './uploads' )));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}
app.get('/fuck',(req,res)=>{
  res.send('fuck');
})
app.listen(port,(err)=>err? console.log(err):console.log(`server is running on ${port}`))