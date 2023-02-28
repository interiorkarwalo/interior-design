import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import './about.css';
import AboutDetailCard from './AboutDetailCard';
import intVideo from '../../assets/int.mp4';
import ChooseUs from '../../components/choose-us/ChooseUs';
import Footer from '../../components/footer/Footer';
const About = () => {
  return (
    <>
      <div className="about">
        <Header />

        <div className="hero-wrapper">
          <h1>Decoration Ideas</h1>
          <p>All the more reasons to get your dream home interiors now</p>
          <button className="btn">Latest</button>
        </div>
      </div>
      <Feed
        title="About Interier X"
        desc="We are a designer led Interior design firm. Even today all projects we undertake are designed, managed & executed by Nandita & her core team. We limit ourselves to not more than 4 – 5 Turnkey projects at a time to ensure attention to detail.  We are a designer led Interior design firm. Even today all projects we undertake are designed, managed & executed by Nandita & her core team. We limit ourselves to not more than 4 – 5 Turnkey projects at a time to ensure attention to detail"
        url="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="about-video-div  container">
        <div className="about-video-video ">
          <h2>OUR VISION</h2>
          <video
            id="about-video"
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
        <div className="about-video-content">
          <img src="/vision1.gif" alt="" />
          <p>
            Our vision is to provide you with the stunning outcomes of the
            concerned sectors so that you can easily meet your needs. Our main
            focus is on quality and always giving our clients a defined
            framework and finishing work within defined time schedules. You can
            easily find the finishing in our work which always reflects the
            soothing effects necessary for a house or an office setup. In every
            criterion, you will find our fit and suit.
          </p>
        </div>
      </div>
      {/* <AboutDetailCard /> */}
      {/* <ChooseUs /> */}
      <Footer />
    </>
  );
};

export default About;
