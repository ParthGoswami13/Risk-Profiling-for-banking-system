const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');
const {
  createIndividualKYC, getIndividualKYC, updateIndividualKYC, deleteIndividualKYC,
  createBusinessKYC, getBusinessKYC, updateBusinessKYC, deleteBusinessKYC,
  createEDD, getEDD, updateEDD, deleteEDD,
  createPeriodicUpdate, getPeriodicUpdate, updatePeriodicUpdate, deletePeriodicUpdate,
  createKYCWithImage, getAllKYC, updateKYCWithImage, deleteKYCWithImage
} = require('../controllers/kycController');
const { Photo } = require('../models/kycSchema');

const router = express.Router();

// Ensure DB connection is established
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established for file storage.');
});

// Configure GridFS Storage
    const storage = new GridFsStorage({
        db: mongoose.connection, // Use the existing connection
        options: { useUnifiedTopology: true }, // Use recommended options
        file: (req, file) => {
        return {
            filename: `${Date.now()}-${file.originalname}`,
            bucketName: 'uploads', // Ensure the bucket name matches in DB
        };
        }
    });
  
  const upload = multer({ storage });
  
  // Routes for CRUD operations
  router.post('/create', upload.single('photo'), createKYCWithImage);     // Create with image
  router.get('/all', getAllKYC);                                          // Get all KYCs
  router.put('/update/:id', upload.single('photo'), updateKYCWithImage);  // Update with new image
  router.delete('/delete/:id', deleteKYCWithImage);  

/* 
  ======================
  Individual KYC Routes
  ======================
*/
router.post('/individual', createIndividualKYC);
router.get('/individual/:id', getIndividualKYC);
router.put('/individual/:id', updateIndividualKYC);
router.delete('/individual/:id', deleteIndividualKYC);

/* 
  ====================
  Business KYC Routes
  ====================
*/
router.post('/business', createBusinessKYC);
router.get('/business/:id', getBusinessKYC);
router.put('/business/:id', updateBusinessKYC);
router.delete('/business/:id', deleteBusinessKYC);

/* 
  ==========================
  Enhanced Due Diligence (EDD)
  ==========================
*/
router.post('/edd', createEDD);
router.get('/edd/:id', getEDD);
router.put('/edd/:id', updateEDD);
router.delete('/edd/:id', deleteEDD);

/* 
  =======================
  Periodic Update Routes
  =======================
*/
router.post('/periodic-update', createPeriodicUpdate);
router.get('/periodic-update/:id', getPeriodicUpdate);
router.put('/periodic-update/:id', updatePeriodicUpdate);
router.delete('/periodic-update/:id', deletePeriodicUpdate);

module.exports = router;
