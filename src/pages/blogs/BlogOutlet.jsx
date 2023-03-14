import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';

const BlogOutlet = () => {
  return (
    <>
      <Header />
      <div
        style={{
          height: '100px',
          borderBottom: '2px solid gray',
          marginBottom: '1rem',
        }}
      />
      <Outlet />
    </>
  );
};

export default BlogOutlet;
