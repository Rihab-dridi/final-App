const express= require('express')
const fileUpload = require('express-fileupload');
const ConnectDB=require('./server/config/connectDB')
const booksRoutes=require('./server/routes/books')
const feildsRoutes=require('./server/routes/feilds')
const emailsRoutes=require('./server/routes/emails')
 const studentsRoutes=require('./server/routes/students')
 const uploadRoutes=require('./server/routes/upload')
const authRoutes=require('./server/routes/Auth')
const newRoutes=require('./server/routes/new')

const app=express()
const port= process.env.port || 5000
//midelwares
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

  
  
//app.use('/user',authRoutes)
app.use('/new',newRoutes)
app.use('/students',studentsRoutes)
app.use('/books',booksRoutes)
app.use('/feilds',feildsRoutes)
app.use('/emails',emailsRoutes)
app.use('/upload',uploadRoutes)
//app.use('/uploads', express.static(path.join(_dirname, './uploads' )));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/buid'))
}

app.listen(port,(err)=>err? console.log(err):console.log(`server is running on ${port}`))