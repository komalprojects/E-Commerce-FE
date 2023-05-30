import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './helpers';

export default function PrivateRoute() {
  const auth = useAuth()
  return auth ? <Outlet /> : <Navigate to='/' />;
}
