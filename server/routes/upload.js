const express = require('express')
const router = express.Router()
const uploadMulter = require('../Midelwares/upload')
const validation = require('../Midelwares/uploadValidation')


router.post('/category', uploadMulter, validation,(req, res) => {
    let name = req.body.name
    let image = req.file.path
    console.log(name, image)
    const category = new Category({
        name: name,
        image: image
    })
    category.save((err, category) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                errors: err.meesage
            })
        }
        return res.json({
            message: "Created category successfully",
            category
        })
    })

})

module.exports = router