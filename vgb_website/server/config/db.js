// server/config/db.js
const mongoose = require('mongoose');

// Optionally use an in-memory MongoDB server for local development when MONGO_URI is missing
let memoryServerInstance = null;

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    console.log('MONGO_URI exists:', !!process.env.MONGO_URI);
    
    // Hide sensitive info from logs but show part of the connection string for debugging
    const mongoUriPreview = process.env.MONGO_URI 
      ? `${process.env.MONGO_URI.substring(0, 20)}...${process.env.MONGO_URI.substring(process.env.MONGO_URI.length - 20)}`
      : 'undefined';
    console.log('MONGO_URI preview:', mongoUriPreview);
    
    let conn;

    if (process.env.MONGO_URI) {
      // Connect to provided URI
      conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      // If running in production — do not fallback to in-memory DB
      if (process.env.NODE_ENV === 'production') {
        throw new Error('MONGO_URI is not set in production environment');
      }

      // Lazy load memory server to keep dependencies optional at runtime
      const { MongoMemoryServer } = require('mongodb-memory-server');
      console.log('No MONGO_URI provided, starting in-memory MongoDB for local development');

      memoryServerInstance = await MongoMemoryServer.create();
      const memoryUri = memoryServerInstance.getUri();

      conn = await mongoose.connect(memoryUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;