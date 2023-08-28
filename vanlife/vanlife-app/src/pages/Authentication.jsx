import React, {useContext} from 'react';
import {Outlet, Navigate, useLocation} from 'react-router-dom'
import {LoginContext} from '../components/Layout'

export default function Authentication() {
    const location = useLocation()
    
    const {isLoggedIn} = useContext(LoginContext)

    if(isLoggedIn) {
        return <Outlet />
    }
    
    return <Navigate to="/login" replace state={{"message": "You need to be logged in to access this page",
                                         "from": location.pathname}}/>
    
};