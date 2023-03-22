import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
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
      <Footer />
    </>
  );
};

export default BlogOutlet;
