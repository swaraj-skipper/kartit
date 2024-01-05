import React from 'react'
import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
        return <Navigate to="/login"/>
    }
 return children
};

export default ProtectedRoute;