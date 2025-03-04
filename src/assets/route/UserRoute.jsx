import React, { useContext } from 'react';


import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../provider/AuthProvider';
import useUser from '../../hook/useUser';

const UserRoute = ({children}) => {
    let {user,loading}= useContext(Context)
    let [isUser,userLoading]= useUser()


             let location= useLocation()

    if(loading || userLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isUser){
        return children
    }


    return <Navigate  to={"/login"} state={{from:location}} replace></Navigate>
};

export default UserRoute;