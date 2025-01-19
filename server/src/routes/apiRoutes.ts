// backend/src/apiRoutes.ts
import express, { Request, Response } from 'express';
import User from '../models/User';  // Import the User model
import { authProtected } from '../middleware/authProtected';

// Define custom types for request parameters
interface Params {
    id: string;  // assuming `id` is a string
}

const router = express.Router();

// Sample route for testing
router.get('/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend!' });
});

// Create a new user (POST)
router.post('/users', async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Error creating user', details: error });
  }
});

// Read all users (GET)
router.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users', details: error });
  }
});

// Read a single user by ID (GET)
router.get('/users/:id', authProtected,  async (req: Request<Params>, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user', details: error });
  }
});

// Update a user by ID (PUT)
router.put('/users/:id', authProtected, async (req: Request<Params>, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user', details: error });
  }
});

// Delete a user by ID (DELETE)
router.delete('/users/:id', authProtected, async (req: Request<Params>, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user', details: error });
  }
});

export default router;
