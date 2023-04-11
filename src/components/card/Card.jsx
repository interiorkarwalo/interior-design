import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ title, url, path }) => {
  return (
    <div className="card">
      <Link to={path}>
        <div className="gradient" />
        <img src={url} alt={title} />
        <div className="info">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
