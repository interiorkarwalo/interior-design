import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/header/Header';
import '../service.css';
import Footer from '../../../components/footer/Footer';

const randomImages = [
  {
    url: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1615875474908-f403116f5287?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    url: 'https://uploads-ssl.webflow.com/602c75ed03e1145b5fac2aed/603db0c0119b474884ff2d3e_bedroom_02-4_edited.jpg',
  },
];

const GypsumFalse = () => {
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
        {/* <hr /> */}
        <div
          style={{
            height: '100px',
            borderBottom: '1px solid gray',
            width: '100%',
          }}
        />

        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2>Gypsum False Ceiling Contractor In India</h2>
            <p>
              Gypsum False ceilings are the most commonly seen type of false
              ceiling. They are incredibly adaptable and ideal for creating
              elaborate patterns.They are continuous and blend without leaving
              any indications of edges/seems, and they may be done with rounded
              edges.
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
            <h2>Gypsum False Ceiling Contractor In India</h2>
            <p>
              Gypsum False ceilings are the most commonly seen type of false
              ceiling. They are incredibly adaptable and ideal for creating
              elaborate patterns. They are continuous and blend without leaving
              any indications of edges/seems, and they may be done with rounded
              edges. Many styles are feasible here, from vintage to sumptuous,
              chic to classic; when mixed with contemporary lighting fixtures,
              they give the space a dreamlike atmosphere.
              <br />
              Furthermore, modern boards have improved properties such as
              moisture resistance, fire resistance, and soundproofing. The main
              advantages of gypsum ceilings are design aesthetics, uniform
              illumination, thermal insulation, better soundproofing, and energy
              efficiency. Are you excited to grab all these beautiful qualities?
              <br />
              We, the team of Interior Karwalo, bring the Gypsum False Ceiling
              Contractor In India who is an expert and professional. We offer
              false gypsum ceilings in various thicknesses, shades and,
              patterns, colours. Our company offers an impeccable array of false
              ceilings & partitions that can be used in multiple places, for
              example, commercial offices, schools, institutional places,
              colleges and several other places. We are counted among the top
              service providers of Gypsum False Ceiling contractors in India at
              a very affordable cost.
              <br />
              We have been India's biggest Gypsum False Ceiling Contractors for
              over a decade. Our firm is filled with skilled employees capable
              of achieving the desired results. Get a world-class level of
              creative designs with better finishing & soothing manners! We
              always strive to offer top-level deeds in a sophisticated manner.
              Grab the aesthetic level of solutions with concerned ceiling
              solutions.
            </p>
          </div>
          <div>
            <h3>Why should you fall for the Gypsum False Ceiling?</h3>
            <p>The False ceilings have various benefits or advantages:</p>
            <div>
              <h4>• Lighting Efficiency</h4>
              <p>
                Overhead lighting is available in various designs and hues.
                False ceilings genuinely assist in installing various light
                fixtures in the house interior by offering the extra space
                necessary to install various alternatives such as mood,
                diffused, or slot lighting. False ceiling lights are also
                available in various colours and intensities, which contribute
                to the beauty of the space, particularly at night.{' '}
              </p>
            </div>
            <div>
              <h4>• Wiring & Plumbing</h4>
              <p>
                Wiring and plumbing for overhead fixtures, including air
                conditioners, fans, and cove lighting, may be readily run
                between the existing slab and drop ceiling. This eliminates the
                necessity of a tangle of cables in or on the ceiling while also
                improving the overall appearance of your property. It's also
                commonly used to hide plumbing systems.
              </p>
            </div>
            <div>
              <h4>• Energy Efficiency</h4>
              <p>
                A false ceiling is utilised to minimise the amount of air in a
                room, hence reducing the air conditioning demand. It also adds
                another layer of insulation, further insulating the space and
                lowering the energy required for heating and cooling.{' '}
              </p>
            </div>
            <div>
              <h4>• Thermal insulation</h4>
              <p>
                When the patio above the roof is heated by the sun, the heat
                from the ceiling might be uncomfortable. Thermal insulation is
                created by constructing an air space between the False and slab
                ceilings. It contributes to the space being more refreshing and
                cooler.
              </p>
            </div>
            <div>
              <h4>• Soundproofing</h4>
              <p>
                The majority of False ceiling materials have excellent acoustic
                qualities. This is an important quality in an apartment since
                owners want sound insulation from the upper flats. The False or
                drop ceiling minimises noise by producing an insulating barrier
                between the two surfaces.
              </p>
            </div>
          </div>
          <div>
            <h3>How much does False Ceiling Work cost?</h3>
            <p>
              Several factors determine the cost of installing a False ceiling.
              Normally, it costs Rs 60 per sqft to Rs 100 per sqft based on the
              False ceiling material, brand and intricacy. Here is a list of
              crucial variables to consider while analysing or just negotiating
              the charges:
            </p>
            <div>
              <h4>• Local Availability</h4>
              <p>
                False ceilings require hefty materials. Thus, local availability
                is a major issue in costs. If the material is conveniently
                accessible, logistics and transportation expenses will be
                reduced.
              </p>
            </div>
            <div>
              <h4>• The difficulty of false ceiling design</h4>
              <p>
                The installation cost is related to the intricacy of the ceiling
                design. Some of the intricate forms cost more as they are very
                time-consuming and even demand a lot of accuracy and work from
                professionals.
              </p>
            </div>
            <div>
              <h4>• Quality</h4>
              <p>
                The cost of building is proportionate to the materials' quality.
                High-quality items provide a larger return on investment, even
                if the original cost is more, because the material is more
                durable and saves money on maintenance in the long term.
              </p>
            </div>
            <div>
              <h4>• Size</h4>
              <p>
                The cost is inversely proportional to the size of the covered
                ceiling. Because the area is big, the price per square metre is
                lower because the material can be acquired in large quantities
                and transportation and overhead costs are divided across a
                greater area.
              </p>
            </div>
          </div>
          <div>
            <p>
              Extra and miscellaneous fees include false ceiling installation
              charges, fittings, accent pieces, cove lighting, surface coatings,
              gala cutting, and so on, which are added to the labour and
              material costs.
            </p>
            <br />
            <p>
              So, what have you decided? Are you excited to grab all these
              benefits described in the above sections? If you want to get your
              job done at the lowest price, you can talk with the expert of
              Interior Karwalo. Call us, or you can mail us directly for
              inquiries.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GypsumFalse;
