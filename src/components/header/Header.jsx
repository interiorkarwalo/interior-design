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
            {/* <Link to="/services">Services</Link> */}

            <div class="dropdown">
              <Link class="dropbtn">
                <span>Services</span>
                <span style={{ marginBottom: '8px' }}>&#8964;</span>
              </Link>
              <div class="dropdown-content">
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/3d-rendering-modern-loft-office-lounge-co-working-space-scaled-1.jpg"
                    alt=""
                  />

                  <p>Corporate Office Interior Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/office-interior-design-bid-visualisation-services-manchester-min-scaled-1-1088x664-1.jpg"
                    alt=""
                  />
                  <p>Turnkey Interiors Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/5-Brilliant-Office-Interior-Design-Ideas-You-Can-Implement.jpg"
                    alt=""
                  />
                  <p>Interior Design Consultant</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/Untitled-design-2022-10-03T163746.792.png"
                    alt=""
                  />
                  <p>Office Furniture</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/drywall-glass-meeting-room.jpg"
                    alt=""
                  />
                  <p>Gypsum Partition Contractor</p>
                </Link>
                <Link to="/services">
                  <img
                    src="https://www.spacewoodinteriors.com/wp-content/uploads/2022/12/b869b700ca8a2a6112951d2b47994d5a.jpg"
                    alt=""
                  />
                  <p>Gypsum False Ceiling Contractor</p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link to="/about">About Us</Link>
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
