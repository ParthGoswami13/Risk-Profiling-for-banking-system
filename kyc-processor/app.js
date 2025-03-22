const express = require('express');
const morgan = require('morgan');
const kycRouter = require('./routes/kycRouter');
// const uploadRouter = require('./routes/uploadRouter');

const app = express();

// 1) MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json()); // For parsing JSON data

// Static files middleware (if needed)
// app.use(express.static(`${__dirname}/public`));

// 2) ROUTES
app.use('/api/kyc', kycRouter);
// app.use('/api', uploadRouter);
module.exports = app;
