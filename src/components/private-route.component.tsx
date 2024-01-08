import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from '../models/routes';
import { getValue } from '../utils/storage.util';



const PrivateRoute: React.FC<Route> = ({ element, requireAuth, requireAdmin }) => {
    const token = getValue('token');
    
    const [, tokenPayloadEncoded] = token?.split('.') ?? [];
    const user = JSON.parse(atob(tokenPayloadEncoded));

    const isAdmin = () => {
        return user?.userType === 'Admin' || false;
    };

    if (requireAuth && !token) {
        return <Navigate to={'/login'} />;
    }

    if (requireAdmin && !isAdmin()) {
        return <Navigate to="/forbidden" />;
    }

    return <>{element}</>;
};

export default PrivateRoute;
