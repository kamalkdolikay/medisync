// src/services/userService.ts
import api from "../config/api"; // Axios instance with token interceptor

interface User {
  _id: string; // Optional id to match the backend response
  name: string;
  email: string;
}

// Fetch all users (GET)
export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get('/api/users');
  return response.data;
};

// Fetch a single user by ID (GET)
export const fetchUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/api/users/${id}`);
  return response.data;
};

// Create a new user (POST)
export const createUser = async (user: User): Promise<User> => {
  const response = await api.post('/api/users', user);
  return response.data;
};

// Update a user by ID (PUT)
export const updateUser = async (id: string, updatedUser: User): Promise<User> => {
  const response = await api.put(`/api/users/${id}`, updatedUser);
  return response.data;
};

// Delete a user by ID (DELETE)
export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/api/users/${id}`);
};
