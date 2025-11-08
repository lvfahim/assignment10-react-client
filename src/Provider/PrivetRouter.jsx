import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Loading/Loading';
import { Navigate } from 'react-router';

const PrivetRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user.email){
        return children
    }
    
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    
};

export default PrivetRouter;