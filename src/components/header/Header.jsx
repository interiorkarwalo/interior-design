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

        <img src="/interior1.png" alt="" />
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
            <Link to="/services">Services</Link>
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
