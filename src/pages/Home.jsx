import React from 'react';
import Content from '../components/content/Content';
import Feed from '../components/feed/Feed';
import Hero from '../components/hero/Hero';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';
import Category from '../components/category/Category';
import Gallary from './Gallary';
import Testimonial from '../components/testimonials/Testimonial';

const Home = ({ toggleTheme }) => {
  return (
    <div style={{ transition: 'all 1s ease-in-out' }}>
      {/* <Header toggleTheme={toggleTheme} /> */}
      <Hero />
      {/* <Slider /> */}
      <Content />
      <Spinner />
      <Feed
        title="One-stop shop for all things interiors"
        desc="Headquartered in Charlotte, NC with offices in Charleston, San
          Antonio, and San Jose, our team has nearly 200 years combined
          experience under one roof! Unlike traditional foodservice consultants,
          VisionBuilders Design specializes in creating experiential culinary
          encounters. We do this by incorporating the latest technology within
          layouts, paying special attention to design flow, operational
          prioritization, and food trends with the intention of enhancing
          personal interaction and sensory engagement within every space."
        url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      {/* <Category /> */}
      <Testimonial />
      <Gallary />
    </div>
  );
};

export default Home;
