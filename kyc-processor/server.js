const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

// MongoDB connection string
const DB = 'mongodb+srv://Parth:xLu9P1VrySQHouD1@cluster0.f5ynu.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';

if (mongoose.connection.readyState === 0) {
  // Connect to MongoDB if not already connected
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ DB connection successful!'))
    .catch((err) => {
      console.error('❌ DB connection error:', err.message);
    });
} else {
  console.log('🔄 Already connected to DB.');
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 App is running on port ${port}`);
});
