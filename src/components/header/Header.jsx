import './header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = ({ color, backgroundColor, toggleTheme }) => {
  const [show, setShow] = useState(false);
  return (
    <header>
      <div className="logo">
        {/* <img src="https://responsively.app/assets/img/logo.svg" /> */}
        <h2>INTERIOR DESIGN</h2>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact Us</li>
          <button className="btn" onClick={toggleTheme}>
            Logout
          </button>
        </ul>
      </nav>

      <GiHamburgerMenu
        className="ham-icon"
        onClick={() => setShow((prev) => !prev)}
      />

      {show && (
        <nav
          className="ham"
          style={{ color: color, backgroundColor: backgroundColor }}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>Contact Us</li>
            <button className="btn">Logout</button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
