import './card.css';

const Card = ({ title, url }) => {
  return (
    <div className="card">
      <div className="gradient" />
      <img src={url} />
      <div className="info">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
