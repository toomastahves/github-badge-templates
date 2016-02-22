import mongoose from 'mongoose';

const connectToMainDatabase = () => {
  const url = process.env.MONGOLAB_URI || '';
  try {
    const conn = mongoose.createConnection(url);
    conn.on('connected', () => {
      console.log('Connected to mongodb connectToMainDatabase.');
    });
    return conn;
  } catch(e) {
    console.log('Error connecting mongodb connectToMainDatabase. Check connection string.');
  }
};

export default connectToMainDatabase;
