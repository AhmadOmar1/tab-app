import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NotFound from '../pages/not-found/not-found.page';
import { isLoggedIn } from '../utils/alerts/token.util';


interface ProtectedRouteProps {
    onlyAdmins: boolean;
    component: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component, onlyAdmins  }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login');
        }
    }, []);

    if (!isLoggedIn()) {
        return null;
    } else if (!onlyAdmins) {
        return <NotFound />;
    } else {
        return <>{component}</>;
    }
}

export default ProtectedRoute;
