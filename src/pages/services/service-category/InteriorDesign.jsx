/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import "../service.css";
import Footer from "../../../components/footer/Footer";

const randomImages = [
  {
    url: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    url: "https://uploads-ssl.webflow.com/602c75ed03e1145b5fac2aed/603db0c0119b474884ff2d3e_bedroom_02-4_edited.jpg",
  },
];

const InteriorDesign = () => {
  const [imageUrl, setImageUrl] = useState(randomImages[0].url);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageUrl = (url) => {
    setImageUrl(url);
  };

  return (
    <>
      <div className="container">
        <Header />
        <hr />
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid gray",
            width: "100%",
          }}
        />
        {/* <div className="service ">
          <button>
            <Link to="/services/corporate-office">
              Corporate Office Interior Contractor in India
            </Link>
          </button>
          <button>
            <Link to="/services/turnkey-interior">
              Turnkey Interiors Contractor in India
            </Link>
          </button>
          <button>
            <Link to="/services/interior-design">
              Interior Design Consultant in India
            </Link>
          </button>
          <button>
            <Link to="/services/office-furniture">
              Office Furniture In India
            </Link>
          </button>
          <button>
            <Link to="/services/gypsum-partition">
              Gypsum Partition Contractor In India
            </Link>
          </button>
          <button>
            <Link to="/services/gypsum-false">
              Gypsum False Ceiling Contractor In India
            </Link>
          </button>
        </div> */}
        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2>Gypsum Partition Contractor In India</h2>
            <p>
              Do you require gypsum partitions in your workplace? Interior
              Karwalo is a reputable gypsum partition contractor in India. You
              can find the most suitable plasterboard cabin separation, gypsum
              wall separation, workplace gypsum splitting design, gypsum ceiling
              panels, gypsum wall separation, gypsum drywall separation, etc.
            </p>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <div className="service-image-container-right">
            <img src={imageUrl} alt="" />
            <div>
              {randomImages.map((item) => (
                <img
                  key={item.url}
                  src={item.url}
                  onMouseEnter={() => handleImageUrl(item.url)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category--all-container">
          <div>
            <h2>Gypsum Partition Contractor In India</h2>
            <p>
              Do you require gypsum partitions in your workplace? Interior
              Karwalo is a reputable gypsum partition contractor in India. You
              can find the most suitable plasterboard cabin separation, gypsum
              wall separation, workplace gypsum splitting design, gypsum ceiling
              panels, gypsum wall separation, gypsum drywall separation, etc. If
              you have a limited budget and want to separate your work quickly
              and inexpensively, a gypsum partition is one of the greatest
              options. It is portable and simple to install. Check out some of
              our latest gypsum partition work through our website.
              <br />
              We, the Interior Karwalo, are establishing ourselves in the
              Interior Karwalo industry to create space for our clients, which
              they deserve.
            </p>
          </div>
          <div>
            <h3>Why Gypsum?</h3>
            <p>
              Gypsum is a lightweight internal wall technology with superior
              performance compared to traditional brick walls. In various
              residential, commercial, and industrial building applications,
              gypsum is quickly replacing other materials as the material of
              choice.
              <br />
              Four to five times less time is required for gypsum installation
              than for masonry work. Brick walls use 95% more water than drywall
              construction. Gypsum plasterboard, the main component of drywall,
              makes it 100% recyclable. These characteristics result in a
              decrease in material, energy, and labour, which lowers prices.
            </p>
          </div>
          <div>
            <h3>India's top 1% Gypsum consultants</h3>
            <p>
              With over 50 completed projects, we have made a name for ourselves
              as India's top drywall contracting experts.
            </p>
          </div>
          <div>
            <h3>Simple solutions to difficult issues</h3>
            <p>
              With over 50 completed projects, we have made a name for ourselves
              as India's top drywall contracting consultants. We have
              constructed Gypsum drywall for leading manufacturers.
            </p>
          </div>
          <div>
            <h3>Superior technical ability</h3>
            <p>
              We have a solid knowledge of every important facet of building
              gypsum walls. We take pleasure in being among the best issue
              solvers in our field. Team Interior Karwalo provides a full range
              of Gypsum wall design-build services, including conception,
              design, erection, and everything in between.
            </p>
          </div>
          <div>
            <h3>Highest standards</h3>
            <p>
              For security, installation, and execution, we constantly adhere to
              worldwide best standards. Our field personnel adheres to the best
              safety procedures since the workplace is our top priority. For the
              installation of Gypsum walls, we exclusively utilise wireless,
              high-quality equipment.
            </p>
          </div>
          <div>
            <h3>Block Gypsum Wall System</h3>
            <p>
              An engineered partition wall enclosure may be used in
              administrative buildings, workshops, and offices. Since Interior
              Karwalo manages everything from design requirements through
              project execution, these pre-engineered structures are promised to
              be water-free, mess-free, and headache-free. Consultants from
              different parties, such as architects and other relevant
              individuals like PMC.
              <br />
              Get a flexible partition wall with several applications. You may
              personalise our glass and partition walls to meet your needs. Any
              finish, including paint, wallpaper, laminates, etc., can be used
              on partitions. They can survive longer since they are a
              low-maintenance alternative to brick walls that are not unstable.
            </p>
          </div>
          <div>
            <h3>Fire-Resistant Walls</h3>
            <p>
              A fire-rated drywall helps to contain the fire inside the
              partition and stops smoke from leaking into other spaces.
              Fire-rated gypsum drywall has glass fibre reinforcing and around
              21% of its weight in water that has been chemically mixed. Water
              slowly releases steam as it comes into contact with fire, delaying
              heat transfer.
              <br />
              Our experienced staff has worked on projects for County,
              Government, National, domestic, entertainment, medical, retail,
              F&B, historic restoration, and more. We also have approximately 5+
              years of total expertise in construction. A testament to our
              dedication to safety is that our team of over 50 people has an
              Experience Modification Rate higher than the industry norm.
            </p>
          </div>
          <div>
            <h3>Why do you need a Gypsum partition wall?</h3>
            <div>
              <h4>Economical installation</h4>
              <p>
                Drywall not only saves time but also guarantees affordable
                installation. For a few days or longer, you aren't required to
                hire many individuals and can eventually save a significant sum
                of money that would have been spent on installing a brick wall.
              </p>
            </div>
            <div>
              <h4>Lowers the construction cost</h4>
              <p>
                Every new cement-based building you develop adds weight to the
                entire structure. It is as much as ten times lighter if you use
                gypsum plasterboard in its place. As a result, it saves on
                shipping raw materials and adds structural costs.
              </p>
            </div>
            <div>
              <h4>Sound reduction</h4>
              <p>
                The majority of gypsum plasterboards comprise many layers made
                of various materials. The effectiveness of the sound decreases
                with each layer that it passes. For instance, it also provides
                unparalleled beauty and is ideal for various acoustic
                requirements.
                <br />
                So, do you want to get a consultation from our expert? If yes,
                you can talk with our professional contractors and make some
                best changes in your commercial & industrial space.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InteriorDesign;
