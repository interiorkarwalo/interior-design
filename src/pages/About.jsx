import Feed from '../components/feed/Feed';
import Header from '../components/header/Header';
import './about.css';

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
        title="About Us"
        desc="We are a designer led Interior design firm. Even today all projects we undertake are designed, managed & executed by Nandita & her core team. We limit ourselves to not more than 4 – 5 Turnkey projects at a time to ensure attention to detail.  We are a designer led Interior design firm. Even today all projects we undertake are designed, managed & executed by Nandita & her core team. We limit ourselves to not more than 4 – 5 Turnkey projects at a time to ensure attention to detail"
        url="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </>
  );
};

export default About;
