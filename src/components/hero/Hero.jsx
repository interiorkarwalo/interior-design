import './hero.css';

const Hero = () => {
  return (
    <div className="hero container">
      {/* <img
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      /> */}
      <div className="hero-wrapper">
        <h1>Decoration Ideas</h1>
        <p>All the more reasons to get your dream home interiors now</p>
        <button className="btn">Latest</button>
      </div>
    </div>
  );
};

export default Hero;
