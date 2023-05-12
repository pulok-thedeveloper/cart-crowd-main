import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { InfinitySpin } from  'react-loader-spinner';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div className="grid justify-center items-center min-h-screen">
        <InfinitySpin
        width="300"
        color="#114B5F"
      /></div>
    }

    if(user && user?.email){
        return children;
    }

    return (
        <Navigate to="/login" state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;