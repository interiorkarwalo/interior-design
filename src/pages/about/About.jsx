import Feed from '../../components/feed/Feed';
import Header from '../../components/header/Header';
import './about.css';
import AboutDetailCard from './AboutDetailCard';
import intVideo from '../../assets/int.mp4';
import ChooseUs from '../../components/choose-us/ChooseUs';
import Footer from '../../components/footer/Footer';

const desc1 =
  'Our organization holds the specialization to offer the specialized requirements of various interior finishings. All the solutions which are catered by our organization are widely used for both type of needs and demands such as banks, colleges, coaching institutes, homes, offices, business venues, small business offices, corporate and multinational companies etc. Our organization has professional designers who are capable to give you elegant furnishings which aids the beauty to the all type of finishing.';

const desc2 =
  'Our group is amongst the pre-eminent groups and firms for the array of turnkey projects which are provided by us at very affordable prices. We give our clients the greatest value of services according to their projects, needs and requirements. Our company has a range of employees and professionals into the organization and all these manpower are continuously trained by the experts to get them updated with the latest and recent technology and also make them aware of the machinery and tools which are based on the latest technology and concepts.';

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
        title="About Interier Karwalo"
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
      <div className="service-desc1 container">
        <div className="service-desc1-imageConatiner">
          <h1> Our Philosophy</h1>
          <img
            src="https://media.istockphoto.com/id/1352666375/photo/a-stylish-living-room-interior-with-brown-and-yellow-coloured-furniture-and-wooden-elements.jpg?b=1&s=170667a&w=0&k=20&c=2UpsLAY8HpsFJHQ4gE0rrvRgZVeslErX1uTno6uTFzg="
            alt=""
          />
        </div>
        <div className="about-video-content">
          <img src="/philosophy.gif" alt="" />
          <p>{desc1}</p>
        </div>
      </div>
      <div className="service-desc1 service-desc1-second container">
        <div className="about-video-content">
          <img src="/mission.gif" alt="" />
          <p className="service-desc1-second-p">{desc2}</p>
        </div>
        <div className="service-desc1-imageConatiner service-desc1-second-img">
          <h1>Our Mission</h1>
          <img
            src="https://media.istockphoto.com/id/1455622789/photo/black-luxury-modern-retro-style-living-room-with-blank-image-frames-for-your-design.jpg?b=1&s=170667a&w=0&k=20&c=tNaQIArkCvC3oY_6-80BmUGyA5QinElxTda_r4s1u_M="
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
