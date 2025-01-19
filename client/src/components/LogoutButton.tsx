// src/components/LogoutButton.tsx
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Clear token and context
    navigate('/login'); // Redirect to the login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
