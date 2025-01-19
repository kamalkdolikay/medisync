// LoginComponent.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

import LoginHtml from "./login-html";

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login: authLogin, token } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
          navigate('/dashboard'); // Redirect if already logged in
        }
      }, [token, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            authLogin(data.token); // Save the token in context and localStorage
            navigate('/users'); // Redirect to users page after login
        } catch (error: any) {
            alert(error.response?.data?.error || 'Login failed');
        }
    };

  return (<LoginHtml
            handleSubmit={handleSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword} />);
};

export default LoginComponent;