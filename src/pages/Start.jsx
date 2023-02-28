import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import globeVideo from '../assets/globe-12486.mp4';
import lvGlobe from '../assets/file.mp4';
import tunnel from '../assets/x.mp4';
const Start = () => {
  //helofff
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className="globe">
      (
      <video
        id="video"
        loop
        autoPlay
        className="intro-transition-video"
        muted
        style={{ opacity: 1 }}
      >
        <source
          data-video-id="intro.part1.loop"
          src={lvGlobe}
          type="video/mp4"
        ></source>
      </video>
      )
      {/* {!show && (
        <video
          id="video"
          loop
          autoPlay
          className="intro-transition-video"
          muted
          playsInline=""
          preload="auto"
          style={{ opacity: 1 }}
        >
          <source
            data-video-id="intro.part1.loop"
            src={lvGlobe}
            type="video/mp4"
          ></source>
        </video>
      )} */}
      {/* <div className="globe">
        <video autoPlay loop muted id="video">
          <source src={globeVideo} type="video/mp4"></source>
        </video>
      </div> */}
      <button className="start-btn" onClick={handleClick}>
        ENTER A NEW WORLD
      </button>
    </div>
  );
};

export default Start;
