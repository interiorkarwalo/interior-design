import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ title, url }) => {
  return (
    <div className="card">
      <Link to="/services">
        <div className="gradient" />
        <img src={url} />
        <div className="info">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
