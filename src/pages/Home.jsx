import React from 'react';
import Content from '../components/content/Content';
import Feed from '../components/feed/Feed';
import Hero from '../components/hero/Hero';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';
import Category from '../components/category/Category';

const Home = ({ toggleTheme }) => {
  return (
    <div style={{ transition: 'all 1s ease-in-out' }}>
      {/* <Header toggleTheme={toggleTheme} /> */}
      <Hero />
      {/* <Slider /> */}
      <Content />
      <Spinner />
      <Feed />
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
