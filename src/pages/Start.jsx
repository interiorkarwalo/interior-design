import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import globeVideo from "../assets/globe-12486.mp4";
import lvGlobe from "../assets/file.mp4";
import tunnel from "../assets/x.mp4";
const Start = () => {
  //helofff
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
<<<<<<< HEAD
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
          src={tunnel}
          type="video/mp4"
        ></source>
      </video>
      )
      {/* {!show && (
=======
    setShow((prev) => !prev);
    setTimeout(() => {
      navigate("/home");
    });
  };
  return (
    <div className="globe">
      {!show && (
>>>>>>> 5de61f8108368e2a1f81ad052951c30fb670e627
        <video
          id="video"
          loop
          autoPlay
          className="intro-transition-video"
          muted
<<<<<<< HEAD
          playsInline=""
          preload="auto"
=======
          // playsInline=""
          // preload="auto"
>>>>>>> 5de61f8108368e2a1f81ad052951c30fb670e627
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
