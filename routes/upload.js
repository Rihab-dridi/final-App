const express = require('express');
const verify = require('../Midelwares/token');
const router = express.Router();


router.post('/upload', (req, res) => {
    if (req.files == null) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }
  
    const file = req.files.file;
  
    file.mv(`${__dirname}/client/public/upload/${file.name}`, err => {
        
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
      
    });
  });

module.exports = router;