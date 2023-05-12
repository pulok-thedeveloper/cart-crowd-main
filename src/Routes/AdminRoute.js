import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import { InfinitySpin } from 'react-loader-spinner';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    if(loading || isAdminLoading){
        return <div className="grid justify-center items-center min-h-screen w-full">
        <InfinitySpin
        width="300"
        color="#114B5F"
      /></div>
    }

    if(user?.email && isAdmin){
        return children;
    }


    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default AdminRoute;