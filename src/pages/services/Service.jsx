import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './service.css';
import Footer from '../../components/footer/Footer';
const desc1 =
  'Our organization holds the specialization to offer the specialized requirements of various interior finishings. All the solutions which are catered by our organization are widely used for both type of needs and demands such as banks, colleges, coaching institutes, homes, offices, business venues, small business offices, corporate and multinational companies etc. Our organization has professional designers who are capable to give you elegant furnishings which aids the beauty to the all type of finishing.';

const desc2 =
  'Our group is amongst the pre-eminent groups and firms for the array of turnkey projects which are provided by us at very affordable prices. We give our clients the greatest value of services according to their projects, needs and requirements. Our company has a range of employees and professionals into the organization and all these manpower are continuously trained by the experts to get them updated with the latest and recent technology and also make them aware of the machinery and tools which are based on the latest technology and concepts.';

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
    url: 'https://images.unsplash.com/photo-1556595101-15dc5f6431e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  },
];

const serviceArray1 = [
  {
    title: 'Corporate Office Interior Contractor in India',
    content:
      'In case you’re discovering your home has turned out to be excessively exhausting, and don’t know where making it impossible to begin, you can liven it up with a couple of simple interiors designing thoughts and with the help of Corporate office interior in Delhi.',
  },
  {
    images: [
      {
        type: '1',
        url: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        type: '1',
        url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVyaW9yJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        type: '1',
        url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        type: '1',
        url: 'https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        type: '1',
        url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      },
    ],
  },
];
const turnkeyArray = [
  {
    title: 'Turnkey Interiors Contractor in India',
    content:
      'In case you’re discovering your home has turned out to be excessively exhausting, and don’t know where making it impossible to begin, you can liven it up with a couple of simple interiors designing thoughts and with the help of Corporate office interior in Delhi.',
  },
  {
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHR1cm5rZXklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      },
    ],
  },
];
const Service = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState(
    'Corporate Office Interior Contractor in India'
  );
  const [chooseArray, setChooseArray] = useState(serviceArray1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageUrl = (url) => {
    setImageUrl(url);
  };
  const handleClick = (arr, title) => {
    setChooseArray(arr);
    setTitle(title);
    console.log(chooseArray[1].images[0].url);
    setImageUrl(randomImages[Math.floor(Math.random() * 5)].url);
  };

  console.log(chooseArray[0].content);

  return (
    <>
      <div className="container">
        <Header />
        <hr />
        <div
          style={{
            height: '100px',
            borderBottom: '1px solid gray',
            width: '100%',
          }}
        />
        <div className="service ">
          <button
            onClick={() =>
              handleClick(
                serviceArray1,
                'Corporate Office Interior Contractor in India'
              )
            }
          >
            Corporate Office Interior Contractor in India
          </button>
          <button
            onClick={() =>
              handleClick(turnkeyArray, 'Turnkey Interiors Contractor in India')
            }
          >
            Turnkey Interiors Contractor in India
          </button>
          <button
            onClick={() =>
              handleClick(turnkeyArray, 'Interior Design Consultant in India')
            }
          >
            Interior Design Consultant in India
          </button>
          <button
            onClick={() =>
              handleClick(turnkeyArray, 'Office Furniture In India')
            }
          >
            Office Furniture In India
          </button>
          <button
            onClick={() =>
              handleClick(turnkeyArray, 'Gypsum Partition Contractor In India')
            }
          >
            Gypsum Partition Contractor In India
          </button>
          <button
            onClick={() =>
              handleClick(
                turnkeyArray,
                'Gypsum False Ceiling Contractor In India'
              )
            }
          >
            Gypsum False Ceiling Contractor In India
          </button>
        </div>
        <div className="service-image-container">
          <div className="service-image-container-left">
            <h2>{title}</h2>
            <p>{chooseArray[0].content}</p>
            <button className="btn">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <div className="service-image-container-right">
            <img
              src={imageUrl ? imageUrl : chooseArray[1].images[0].url}
              alt=""
            />
            <div>
              {chooseArray[1].images.map((item) => (
                <img src={item.url} onClick={() => handleImageUrl(item.url)} />
              ))}
            </div>
          </div>
        </div>

        <div className="service-desc1">
          <div className="service-desc1-imageConatiner">
            <h1> Our Philosophy</h1>
            <img
              src="https://media.istockphoto.com/id/1352666375/photo/a-stylish-living-room-interior-with-brown-and-yellow-coloured-furniture-and-wooden-elements.jpg?b=1&s=170667a&w=0&k=20&c=2UpsLAY8HpsFJHQ4gE0rrvRgZVeslErX1uTno6uTFzg="
              alt=""
            />
          </div>
          <p>{desc1}</p>
        </div>
        <div className="service-desc1 service-desc1-second">
          <p className="service-desc1-second-p">{desc2}</p>
          <div className="service-desc1-imageConatiner service-desc1-second-img">
            <h1>Our Mission</h1>
            <img
              src="https://media.istockphoto.com/id/1455622789/photo/black-luxury-modern-retro-style-living-room-with-blank-image-frames-for-your-design.jpg?b=1&s=170667a&w=0&k=20&c=tNaQIArkCvC3oY_6-80BmUGyA5QinElxTda_r4s1u_M="
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
