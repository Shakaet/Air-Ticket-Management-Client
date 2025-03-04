
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../provider/AuthProvider';


const PrivateRoute = ({children}) => {

    
    let {user,loading}= useContext(Context)

    let location= useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }


    if(user){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>
    
};

export default PrivateRoute;
