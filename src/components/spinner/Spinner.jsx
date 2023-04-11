import { Link } from 'react-router-dom';
import './spinner.css';
const Spinner = () => {
  return (
    <div className="body">
      <div className="spinner-title">
        <h1>Be inspired by what you see</h1>
        <p style={{ marginTop: '5px' }}>All you need to create your space</p>
      </div>
      <Link to="/services/gypsum-partition">
        <div className="box">
          {/* <Link to="/services"> */}
          <span style={{ '--i': 1 }}>
            <img
              src="https://media.istockphoto.com/id/1386951967/photo/modern-kitchen-interior-with-green-wall.jpg?b=1&s=170667a&w=0&k=20&c=6_d5XfDRbUJZdrzvv5fAPTTsBp3f3NgvHpdp-3T8aeE="
              alt="image1"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 2 }}>
            <img
              src="https://media.istockphoto.com/id/1354262369/photo/mock-up-poster-frame-in-modern-interior-background-living-room-scandinavian-style-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=_Hy3y9kx7kUejKVbdcwAHJpzQwrntc16jA1Tq6YmF00="
              alt="image2"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 3 }}>
            <img
              src="https://media.istockphoto.com/id/1423732380/photo/cozy-luxury-and-modern-living-room-with-large-windows-sofa-chairs-decoration-and-fireplace.jpg?b=1&s=170667a&w=0&k=20&c=Da8zES2GtccNwS3tdOGJxQ_F_b-SpToOkKDepjELns0="
              alt="image3"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 4 }}>
            <img
              src="https://media.istockphoto.com/id/1455319664/photo/luxury-dark-dining-room-interior-with-table-and-six-chairs.jpg?b=1&s=170667a&w=0&k=20&c=i_zS7xs1qucuYeHTy2KGJ3yCz2aA9Q1vjAPPGG-7Qyc="
              alt="image4"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 5 }}>
            <img
              src="https://media.istockphoto.com/id/822646168/photo/sofa-with-pillows.jpg?s=612x612&w=0&k=20&c=AtbGaaAnEX4OKcaGS2BGPeF3HdwZ3KhbbRSb4kNzQhI="
              alt="image5"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 6 }}>
            <img
              src="https://media.istockphoto.com/id/1300125969/photo/home-interior-mock-up-with-blue-sofa-wooden-table-and-decor-in-blue-living-room.jpg?s=612x612&w=0&k=20&c=tn5yXi6xa4C0aUDteTO2jg9e6iAFQTuf3scnQjVqg3o="
              alt="image6"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 7 }}>
            <img
              src="https://media.istockphoto.com/id/822648232/photo/living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=gcKtSYuQKxb_6Zht4zfe7eYQUIOgHQZ70WCmkUxjti0="
              alt="image7"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ '--i': 8 }}>
            <img
              src="https://media.istockphoto.com/id/1284941025/photo/digitally-rendered-view-of-a-beautiful-living-room.jpg?s=612x612&w=0&k=20&c=mGHeCikkqOoHbGEQQigXvJmE1lW67zY0zo4NypkKGmQ="
              alt="image8"
            />
          </span>
          {/* </Link> */}
        </div>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Spinner;
