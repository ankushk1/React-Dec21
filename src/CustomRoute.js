import React from 'react'
import { Route, redirect, Navigate } from 'react-router-dom';

const CustomRoute = ({children}) => {

  const user = localStorage.getItem('userId');
  
  if (!user) {
    return <Navigate to={'/signin'} replace />;
  }
  return children;
}

export default CustomRoute