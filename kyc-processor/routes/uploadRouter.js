const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const { Photo } = require('../models/kycSchema');
const router = express.Router();

// Ensure DB connection is established
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established for file storage.');
});

// Configure GridFsStorage
const storage = new GridFsStorage({
  db: mongoose.connection,
  file: (req, file) => {
    return {
      filename: `${Date.now()}-${file.originalname}`,
      bucketName: 'uploads'  // Ensure bucket name consistency
    };
  }
});

const upload = multer({ storage });

// Image Upload Route
router.post('/uploads', upload.single('photo'), async (req, res) => {
  try {
    const newPhoto = new Photo({
      filename: req.file.filename,
      contentType: req.file.mimetype
    });
    await newPhoto.save();
    res.json({ success: true, fileId: newPhoto._id });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Image upload failed' });
  }
});

// 🔥 File Retrieval Route (Place this below the upload route)
router.get('/files/:filename', (req, res) => {
  const gfs = mongoose.connection.db.collection('uploads.files');  // Adjust collection
  gfs.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ error: 'No file found' });
    }
    res.json(file);  // Return file details
  });
});

module.exports = router;
