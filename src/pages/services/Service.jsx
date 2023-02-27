import { useState } from 'react';
import Header from '../../components/header/Header';
import './service.css';

const serviceArray1 = [
  {
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
  const [chooseArray, setChooseArray] = useState(serviceArray1);
  const handleImageUrl = (url) => {
    setImageUrl(url);
  };
  const handleClick = (arr) => {
    setChooseArray(arr);
  };

  console.log(chooseArray, chooseArray[1].images[0]);

  return (
    <div className="container">
      <Header />
      <div style={{ height: '100px' }} />
      <div className="service ">
        <button onClick={() => handleClick(serviceArray1)}>
          Corporate Office Interior Contractor in India
        </button>
        <button onClick={() => handleClick(turnkeyArray)}>
          Turnkey Interiors Contractor in India
        </button>
        <button>Interior Design Consultant in India</button>
        <button>Office Furniture In India</button>
        <button>Gypsum Partition Contractor In India</button>
        <button>Gypsum False Ceiling Contractor In India</button>
      </div>
      <div className="service-image-container">
        <div className="service-image-container-left">
          <h1>Corporate Office Interior Contractor in India</h1>
          <p>{chooseArray[0].content}</p>
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
    </div>
  );
};

export default Service;
