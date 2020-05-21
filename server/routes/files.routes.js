const express = require('express');
const router = express.Router();
const multer = require('multer')
const uploader = require('../configs/cloudinary.config')

// router.post('/upload', uploader.multiple("photos"), (req, res, next) => {
//     if (!req.file) {
//         next(new Error('No file uploaded!'));
//         return;
//     }
//     res.json({ secure_url: req.file.secure_url });
// })

router.post('/uploadProfileImg', uploader.single("profileImg"), (req, res, next) => {
    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.secure_url });
})





module.exports = router