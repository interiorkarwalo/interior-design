import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer class="footer ">
      <div class="footer-container">
        <div class="footer-row">
          <div class="footer-col">
            {/* <h4>online shop</h4> */}
            <ul>
              <li style={{ height: '200px', width: '100%' }}>
                <img
                  src="/logo4.svg"
                  alt=""
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </li>
              {/* <li>
                <a href="#">Phone: +91 11 1111 2900</a>
              </li>
              <li>
                <a href="#">Email: info@demo.com</a>
              </li> */}
            </ul>
          </div>
          <div class="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <a href="/services">Our services</a>
              </li>
              <li>
                <a href="/about">privacy policy</a>
              </li>
              <li>
                <a href="/about">affiliate program</a>
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
                <a href="/contact">Blogs</a>
              </li>
              <li>
                <a href="#">Gallary</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>follow us</h4>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
