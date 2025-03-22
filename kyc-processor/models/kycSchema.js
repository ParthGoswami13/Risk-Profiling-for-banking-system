const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Grid = require('gridfs-stream');

let gfs;

mongoose.connection.once('open', () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
  gfs.collection('uploads'); // Collection to store images
});

// Individual KYC Schema
const individualKYCSchema = new Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  identityProof: {
    type: {
      type: String,
      enum: ['Aadhaar Card', 'Passport', 'Voter ID Card', 'Driving License', 'NREGA Job Card', 'PAN Card'],
      required: true
    },
    documentNumber: { type: String, required: true },
    issueDate: { type: Date },
    expiryDate: { type: Date }
  },
  addressProof: {
    type: {
      type: String,
      enum: ['Aadhaar Card', 'Passport', 'Voter ID Card', 'Driving License', 'Utility Bill', 'Bank Statement', 'Employer Letter'],
      required: true
    },
    documentNumber: { type: String, required: true },
    validTill: { type: Date }
  },
  recentPhotograph: { type: String, required: true }, // Path to stored image
  panCard: { type: String, required: true },
  signature: { type: String, required: true }, // Path to stored signature
  riskCategory: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
  lastUpdate: { type: Date, default: Date.now }
});

// Business KYC Schema
const businessKYCSchema = new Schema({
  businessName: { type: String, required: true },
  businessType: { type: String, enum: ['Company', 'Partnership', 'Trust'], required: true },
  incorporationCertificate: { type: String, required: true },
  panCard: { type: String, required: true },
  directorsOrPartners: [{
    name: { type: String, required: true },
    identityProof: String,
    addressProof: String
  }],
  boardResolution: { type: String },
  beneficialOwnershipDetails: { type: String },
  lastUpdate: { type: Date, default: Date.now }
});

// Enhanced Due Diligence (EDD) Schema
const eddSchema = new Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  additionalIdentityProof: { type: String, required: true },
  backgroundCheck: { type: String },
  riskProfile: { type: String, enum: ['PEP', 'NRI', 'High-Risk Country'], required: true },
  stricterMonitoring: { type: Boolean, default: true },
  lastUpdate: { type: Date, default: Date.now }
});

// Periodic Update Schema
const periodicUpdateSchema = new Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  updateCycle: { type: String, enum: ['2 years', '8 years', '10 years'], required: true },
  lastUpdate: { type: Date, default: Date.now },
  nextUpdateDue: { type: Date, required: true }
});

const photoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true }
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = {
  IndividualKYC: mongoose.model('IndividualKYC', individualKYCSchema),
  BusinessKYC: mongoose.model('BusinessKYC', businessKYCSchema),
  EDD: mongoose.model('EDD', eddSchema),
  PeriodicUpdate: mongoose.model('PeriodicUpdate', periodicUpdateSchema),
  Photo,gfs
};
 