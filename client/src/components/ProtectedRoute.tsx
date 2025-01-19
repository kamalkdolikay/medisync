// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children;
};

export default ProtectedRoute;
