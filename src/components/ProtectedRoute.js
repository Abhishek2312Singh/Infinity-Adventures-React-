import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // Check if user is logged in by checking localStorage for token
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    // If no token or user data, redirect to login
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // If user is logged in, render the protected component
    return children;
};

export default ProtectedRoute;
