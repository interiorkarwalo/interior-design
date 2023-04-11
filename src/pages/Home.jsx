import React from 'react';
import Content from '../components/content/Content';
import Feed from '../components/feed/Feed';
import Hero from '../components/hero/Hero';

import Footer from '../components/footer/Footer';
import Spinner from '../components/spinner/Spinner';

import Gallery from './Gallery';
import Testimonial from '../components/testimonials/Testimonial';
import Teams from '../components/teams/Teams';
import ContactForm from '../components/contact-form/ContactForm';

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
        desc="We are a full-service luxurious Interior Design studio serving nationwide residential and commercial clients. Our services include innovative and advanced interior design setups to meet our client's personalities and lifestyles. We have brought exceptional designing ideas with proven experimental techniques for all our service categories."
        url="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      {/* <Category /> */}
      <Testimonial />
      <Gallery />
      <Teams />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
