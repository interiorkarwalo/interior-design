import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ type }) => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className="logo">
        {/* <img src="https://responsively.app/assets/img/logo.svg" /> */}

        <Link to="/home">
          <img src="/logo4.svg" alt="" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {/* <Link to="/services">Services</Link> */}

            <div class="dropdown">
              <Link class="dropbtn">
                <span>Services</span>
                <span style={{ marginBottom: '8px' }}>&#8964;</span>
              </Link>
              <div class="dropdown-content">
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />

                  <p>Corporate Office Interior Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                  <p>Turnkey Interiors Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/210552/pexels-photo-210552.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Interior Design Consultant</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/276510/pexels-photo-276510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Office Furniture</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/6510967/pexels-photo-6510967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Gypsum Partition Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                  />
                  <p>Gypsum False Ceiling Contractor</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/gallary">Gallary</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <button className="btn">
            <Link to="/contact">Contact Us</Link>
          </button>
        </ul>
      </nav>

      <GiHamburgerMenu
        className="ham-icon"
        onClick={() => setShow((prev) => !prev)}
      />

      {show && (
        <nav className="ham">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
