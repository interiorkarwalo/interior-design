import React from 'react';
import Header from '../../components/header/Header';
import intVideo from '../../assets/int.mp4';
import './contact.css';
const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-form">
        <video
          id="int-video"
          loop
          autoPlay
          className="intro-transition-video"
          muted
          style={{ opacity: 1 }}
        >
          <source
            data-video-id="intro.part1.loop"
            src={intVideo}
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
};

export default Contact;
