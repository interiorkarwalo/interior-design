import React from 'react';
import './category.css';

const Category = () => {
  return (
    <div className="category">
      <div className="big-shop" id="shop">
        <div className="shop-title">
          <p>Quality is the easiest way to make beautiful products.</p>
          <h2>
            We are very proud to present you <br /> Our Interier Design
          </h2>
          <hr />
        </div>
        <div className="shop-flex">
          <div className="shop-one">
            <div className="image-one">
              <img src="/pic/furn1.jpg" alt="Corporate Office" />
              <div className="overlay">
                <div className="txt">
                  <h3>Corporate Office Interior Contractor in India</h3>
                  <section>
                    <span>Office</span> / Design
                  </section>
                </div>
              </div>
            </div>

            <div className="image-one">
              <img src="/pic/furn2.jpg" alt="Turnkey Interiors" />
              <div className="overlay">
                <div className="txt">
                  <h3>Turnkey Interiors Contractor </h3>
                  <section>
                    <span>Office</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shop-one">
            <div className="image-one">
              <img src="/pic/furn3.jpg" alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>Interior Design Consultant </h3>
                  <section>
                    <span>Office</span> / Design
                  </section>
                  <div className="link">
                    <a href="#">
                      Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="image-one">
              <img src="/pic/furn4.jpg" alt="" />
              <div className="overlay">
                <div className="txt">
                  <h3>Gypsum False Ceiling Contractor </h3>
                  <section>
                    <span>Office</span> / Design
                  </section>
                </div>
              </div>
            </div>
          </div>

          <div className="shop-two">
            <img src="/pic/furn6.jpg" alt="" />
            <div className="overlay">
              <div className="txt">
                <h3>Gypsum False Ceiling Contractor </h3>
                <section>
                  <span>Office</span> / Design
                </section>
                <div className="link">
                  <a href="#">
                    Shop Now <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
