import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

export default function AuthRequired() {
  const token = localStorage.getItem('token');
  let data;
  try {
    data = jwtDecode(token);
    console.log(data);
    return <Outlet />;
  } catch (error) {
    console.log(error);
    return (
      <Navigate to="/login" state={{ message: 'You must log in first.' }} />
    );
  }
}
