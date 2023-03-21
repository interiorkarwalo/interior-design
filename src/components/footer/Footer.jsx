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
                <a href="/services/office-furniture">Our services</a>
              </li>
              <li>
                <a href="/about">privacy policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="/contact">FAQ</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/gallery">gallery</a>
              </li>
            </ul>
          </div>

          <div class="footer-col f-contact-us">
            <h4>contact us</h4>
            <li>
              <img src="icons8-mail-material-outlined-16.png" alt="" />
              <p>info@pacifencesolutions.com</p>
            </li>
            <li>
              <div
                style={{
                  display: 'flex',
                }}
              >
                <img
                  src="icons8-phone-tanah-basah-basic-outline-16.png"
                  alt=""
                />
                <p>+1888-297-6869 +91 8630819631 </p>
              </div>
            </li>
            <li>
              <img src="icons8-user-location-16.png" alt="" />
              <p>Geeta Nagar, Rishikesh, Uttarakhand, 249201</p>
            </li>
            <li>
              <img src="icons8-time-machine-16.png" alt="" />
              <p>8:00 AM-8:00 PM</p>
            </li>
          </div>
          <div class="footer-col">
            <ul class="footer-logo">
              <li>
                <img className="footer-img-a" src="/footer.svg" alt="" />
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
          © 2023 — Branding Rise. All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
