import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading.jsx';


const PrivateRoute = ({children}) => {
    const {user,loading}= use(AuthContext)
    const location = useLocation();
 
    // console.log(location)
    // console.log(user)
    // if-> user thake return children
    if(loading){
        return <Loading></Loading>;
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    
    // navigare-> Login
};

export default PrivateRoute;