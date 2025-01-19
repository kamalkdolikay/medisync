// backend/src/index.ts
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

// MongoDB connection setup
const mongoURI = process.env.MONGODB_URI;  // MongoDB URI from .env file or default
if (!mongoURI) {
    console.error('MongoDB URI is not defined in the environment variables!');
    process.exit(1); // Exit the application if the URI is not set
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Use API routes
// Sample route for testing
router.get('/data', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the backend!' });
  });

// Start the server
app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
  