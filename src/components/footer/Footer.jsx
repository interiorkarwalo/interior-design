/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="footer ">
      <div class="footer-container">
        <div class="footer-row">
          <div class="footer-col">
            {/* <h4>online shop</h4> */}
            <ul>
              <li style={{ height: "200px", width: "100%" }}>
                <img
                  src="/logo4.svg"
                  alt=""
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
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
        <h6 className="copyright">
          © 2021 — Branding Rise. All Rights Reserved.
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
