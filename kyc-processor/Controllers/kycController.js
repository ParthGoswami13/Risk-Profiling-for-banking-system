const mongoose = require('mongoose');
const { IndividualKYC, BusinessKYC, EDD, PeriodicUpdate, Photo } = require('../models/kycSchema');

//-------------------------------------------------------------------------------------------
// Individual KYC CRUD Operations

// Create Individual KYC
const createIndividualKYC = async (req, res) => {
  try {
    const kyc = new IndividualKYC(req.body);
    await kyc.save();
    res.status(201).json({ message: 'Individual KYC created successfully', data: kyc });
  } catch (error) {
    res.status(400).json({ message: 'Error creating Individual KYC', error });
  }
};

// Read Individual KYC
const getIndividualKYC = async (req, res) => {
  try {
    const kyc = await IndividualKYC.findById(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'KYC record not found' });
    res.status(200).json(kyc);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Individual KYC', error });
  }
};

// Update Individual KYC
const updateIndividualKYC = async (req, res) => {
  try {
    const kyc = await IndividualKYC.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!kyc) return res.status(404).json({ message: 'KYC record not found' });
    res.status(200).json({ message: 'Individual KYC updated successfully', data: kyc });
  } catch (error) {
    res.status(400).json({ message: 'Error updating Individual KYC', error });
  }
};

// Delete Individual KYC
const deleteIndividualKYC = async (req, res) => {
  try {
    const kyc = await IndividualKYC.findByIdAndDelete(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'KYC record not found' });
    res.status(200).json({ message: 'Individual KYC deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Individual KYC', error });
  }
};
//----------------------------------------------------------------------------------------------------

// Business KYC CRUD Operations

const createBusinessKYC = async (req, res) => {
  try {
    const kyc = new BusinessKYC(req.body);
    await kyc.save();
    res.status(201).json({ message: 'Business KYC created successfully', data: kyc });
  } catch (error) {
    res.status(400).json({ message: 'Error creating Business KYC', error });
  }
};

const getBusinessKYC = async (req, res) => {
  try {
    const kyc = await BusinessKYC.findById(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'Business KYC record not found' });
    res.status(200).json(kyc);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Business KYC', error });
  }
};

const updateBusinessKYC = async (req, res) => {
  try {
    const kyc = await BusinessKYC.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!kyc) return res.status(404).json({ message: 'Business KYC record not found' });
    res.status(200).json({ message: 'Business KYC updated successfully', data: kyc });
  } catch (error) {
    res.status(400).json({ message: 'Error updating Business KYC', error });
  }
};

const deleteBusinessKYC = async (req, res) => {
  try {
    const kyc = await BusinessKYC.findByIdAndDelete(req.params.id);
    if (!kyc) return res.status(404).json({ message: 'Business KYC record not found' });
    res.status(200).json({ message: 'Business KYC deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Business KYC', error });
  }
};
//-------------------------------------------------------------------------------------------------------
// Enhanced Due Diligence (EDD) CRUD Operations

const createEDD = async (req, res) => {
  try {
    const edd = new EDD(req.body);
    await edd.save();
    res.status(201).json({ message: 'EDD record created successfully', data: edd });
  } catch (error) {
    res.status(400).json({ message: 'Error creating EDD record', error });
  }
};

const getEDD = async (req, res) => {
  try {
    const edd = await EDD.findById(req.params.id);
    if (!edd) return res.status(404).json({ message: 'EDD record not found' });
    res.status(200).json(edd);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching EDD record', error });
  }
};

const updateEDD = async (req, res) => {
  try {
    const edd = await EDD.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!edd) return res.status(404).json({ message: 'EDD record not found' });
    res.status(200).json({ message: 'EDD updated successfully', data: edd });
  } catch (error) {
    res.status(400).json({ message: 'Error updating EDD record', error });
  }
};

const deleteEDD = async (req, res) => {
  try {
    const edd = await EDD.findByIdAndDelete(req.params.id);
    if (!edd) return res.status(404).json({ message: 'EDD record not found' });
    res.status(200).json({ message: 'EDD deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting EDD record', error });
  }
};
//---------------------------------------------------------------------------------------------------------

// Periodic Update CRUD Operations

const createPeriodicUpdate = async (req, res) => {
  try {
    const update = new PeriodicUpdate(req.body);
    await update.save();
    res.status(201).json({ message: 'Periodic update created successfully', data: update });
  } catch (error) {
    res.status(400).json({ message: 'Error creating periodic update', error });
  }
};

const getPeriodicUpdate = async (req, res) => {
  try {
    const update = await PeriodicUpdate.findById(req.params.id);
    if (!update) return res.status(404).json({ message: 'Periodic update record not found' });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching periodic update', error });
  }
};

const updatePeriodicUpdate = async (req, res) => {
  try {
    const update = await PeriodicUpdate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!update) return res.status(404).json({ message: 'Periodic update record not found' });
    res.status(200).json({ message: 'Periodic update updated successfully', data: update });
  } catch (error) {
    res.status(400).json({ message: 'Error updating periodic update', error });
  }
};

const deletePeriodicUpdate = async (req, res) => {
  try {
    const update = await PeriodicUpdate.findByIdAndDelete(req.params.id);
    if (!update) return res.status(404).json({ message: 'Periodic update record not found' });
    res.status(200).json({ message: 'Periodic update deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting periodic update', error });
  }
};
//--------------------------------------------------------------------------------------------------
//image CRUD
// Create a new KYC record with an image
const createKYCWithImage = async (req, res) => {
  try {
    let photoId = null;

    if (req.file) {
      const newPhoto = new Photo({
        filename: req.file.filename,
        contentType: req.file.mimetype
      });
      await newPhoto.save();
      photoId = newPhoto._id;
    }

    const kyc = new IndividualKYC({
      ...req.body,
      photoId
    });
    await kyc.save();

    res.status(201).json({ message: 'KYC created successfully with image', data: kyc });
  } catch (error) {
    console.error('Error creating KYC:', error);
    res.status(400).json({ message: 'Error creating KYC', error });
  }
};

// Get all KYC records with images
const getAllKYC = async (req, res) => {
  try {
    const kycRecords = await IndividualKYC.find().populate('photoId');
    res.json(kycRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving KYC records', error });
  }
};

// Update a KYC record and its image
const updateKYCWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const kycRecord = await IndividualKYC.findById(id);

    if (!kycRecord) {
      return res.status(404).json({ message: 'KYC record not found' });
    }

    if (req.file) {
      // Delete old image
      if (kycRecord.photoId) {
        await Photo.findByIdAndDelete(kycRecord.photoId);
      }

      // Save new image
      const newPhoto = new Photo({
        filename: req.file.filename,
        contentType: req.file.mimetype
      });
      await newPhoto.save();
      kycRecord.photoId = newPhoto._id;
    }

    // Update other fields
    Object.assign(kycRecord, req.body);
    await kycRecord.save();

    res.json({ message: 'KYC updated successfully', data: kycRecord });
  } catch (error) {
    console.error('Error updating KYC:', error);
    res.status(400).json({ message: 'Error updating KYC', error });
  }
};

// Delete a KYC record and its image
const deleteKYCWithImage = async (req, res) => {
  try {
    const { id } = req.params;
    const kycRecord = await IndividualKYC.findById(id);

    if (!kycRecord) {
      return res.status(404).json({ message: 'KYC record not found' });
    }

    // Delete associated image
    if (kycRecord.photoId) {
      await Photo.findByIdAndDelete(kycRecord.photoId);
    }

    // Delete KYC record
    await IndividualKYC.findByIdAndDelete(id);

    res.json({ message: 'KYC and associated image deleted successfully' });
  } catch (error) {
    console.error('Error deleting KYC:', error);
    res.status(400).json({ message: 'Error deleting KYC', error });
  }
};


module.exports = {
  createIndividualKYC, getIndividualKYC, updateIndividualKYC, deleteIndividualKYC,
  createBusinessKYC, getBusinessKYC, updateBusinessKYC, deleteBusinessKYC,
  createEDD, getEDD, updateEDD, deleteEDD,
  createPeriodicUpdate, getPeriodicUpdate, updatePeriodicUpdate, deletePeriodicUpdate,
  createKYCWithImage,getAllKYC,updateKYCWithImage,deleteKYCWithImage
};
