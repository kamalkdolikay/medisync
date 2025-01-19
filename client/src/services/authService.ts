// src/services/authService.ts
import axios from 'axios';

// Set up Axios instance
const API_BASE_URL = 'http://localhost:5000'; // Your backend URL

const api = axios.create({
  baseURL: `${API_BASE_URL}/auth`,
});

// Login function
export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data; // Returns the token
};

// Register function
export const register = async (name: string, email: string, password: string) => {
  const response = await api.post('/register', { name, email, password });
  return response.data;
};
