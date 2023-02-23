import Header from '../components/header/Header';
import './about.css';

const About = () => {
  return (
    <>
      <Header color="rgb(29, 27, 38)" backgroundColor="white" />

      <div className="about container">
        <h1>About Us</h1>
        <p>
          India’s 1st Healthy Soup Based Meal Brand, Offering 99 + varieties of
          soups, Freshly prepared Soups curated by renowned Chefs and
          Nutritionists.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </>
  );
};

export default About;
