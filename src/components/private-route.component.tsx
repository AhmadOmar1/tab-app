import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Route } from '../models/routes';



const PrivateRoute: React.FC<Route> = ({ element, requireAuth, requireAdmin }) => {
    const auth = useSelector((state: RootState) => state.auth);

    const isAdmin = () => {
        return auth.user?.userType === 'Admin' || false;
    };
    if (requireAuth && !auth.token) {
        return <Navigate to={'/login'} />;
    }

    if (requireAdmin && !isAdmin()) {
        return <Navigate to="/forbidden" />;
    }

    return <>{element}</>;
};

export default PrivateRoute;
