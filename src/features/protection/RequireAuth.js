import {useAuth} from '../../app/context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const {auth} = useAuth();
    const location = useLocation();

    if(!auth?.accessToken) {
        return <Navigate to='/login' state={{from: location}} replace />;
    }
    return <Outlet />
}

export default RequireAuth;