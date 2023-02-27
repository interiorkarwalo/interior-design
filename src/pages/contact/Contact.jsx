import React from 'react';
import Header from '../../components/header/Header';

import ContactForm from '../../components/contact-form/ContactForm';

import './contact.css';
import ContactHero from '../../components/contact-hero/ContactHero';
const Contact = () => {
  return (
    <div>
      <Header />
      <div style={{ height: '100px' }} />
      <ContactHero />

      <ContactForm />
    </div>
  );
};

export default Contact;
