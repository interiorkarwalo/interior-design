import "./hero.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="hero ">
        <Header />
        <div>
          <video
            id="hero-video"
            loop
            autoPlay
            className="intro-transition-video"
            muted
            style={{ opacity: 1 }}
          >
            <source
              data-video-id="intro.part1.loop"
              src="https://21354489.fs1.hubspotusercontent-na1.net/hubfs/21354489/Videos/VB%20SHOWREEL%2001%20WEBSITE.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className="hero-wrapper">
          <h1>Decoration Ideas</h1>
          <p>All the more reasons to get your dream home interiors now</p>
          <button className="btn">
            <Link to={"/services/gypsum-partition"}>Get Services</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
