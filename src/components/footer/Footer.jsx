/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class="footer ">
      <div class="footer-container">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/contact-us">FAQ</a>
              </li>
              <li>
                <a href="/contact-us">Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Our Services</h4>
            <ul>
              {/* <Link to="/services/corporate-office">Corporate Office</Link>
                  <Link to="/services/turnkey-interior">
                    Turnkey Interiors Contractor
                  </Link>
                  <Link to="/services/interior-design">
                    Interior Design Consultant
                  </Link>
                  <Link to="/services/office-furniture">Office Furniture</Link>
                  <Link to="/services/gypsum-partition">
                    Gypsum Partition Contractor
                  </Link>
                  <Link to="/services/gypsum-false">
                    Gypsum False Ceiling Contractor
                  </Link> */}
              <li>
                <a href="/services/corporate-office">Corporate Office</a>
              </li>
              <li>
                <a href="/services/turnkey-interior">
                  Turnkey Interiors Contractor
                </a>
              </li>
              <li>
                <a href="/services/interior-design">
                  Interior Design Consultant
                </a>
              </li>
              <li>
                <a href="/services/office-furniture">Office Furniture</a>
              </li>
              <li>
                <a href="/services/gypsum-partition">
                  Gypsum Partition Contractor
                </a>
              </li>
              <li>
                <a href="/services/gypsum-false">
                  Gypsum False Ceiling Contractor
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-col f-contact-us">
            <h4>contact us</h4>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <li>
                <img src="/icons8-mail-material-outlined-16.png" alt="" />
                <p>info@pacifencesolutions.com</p>
              </li>
              <li>
                <img
                  src="/icons8-phone-tanah-basah-basic-outline-16.png"
                  alt=""
                />
                <p>+1888-297-6869 +91 8630819631 </p>
              </li>
              {/* <li>
                <img src="/icons8-user-location-16.png" alt="" />
                <p>Geeta Nagar, Rishikesh, Uttarakhand, 249201</p>
              </li> */}
              <li>
                <img src="/icons8-time-machine-16.png" alt="" />
                <p>24x7</p>
              </li>
            </div>
          </div>
          <div class="footer-col">
            <ul
              class="footer-logo"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <li>
                <img
                  className="footer-img-a"
                  src="/footer.svg"
                  alt=""
                  style={{ height: '100px' }}
                />
              </li>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <h6 className="copyright">
          © 2023 —{' '}
          <a
            href="https://brandingrise.com/"
            target="_blank"
            rel="noreferrer"
            style={{ borderBottom: '1px solid gray', paddingBottom: '1px' }}
          >
            Branding Rise.
          </a>{' '}
          All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
