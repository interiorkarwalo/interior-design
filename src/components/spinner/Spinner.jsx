import './spinner.css';

const Spinner = () => {
  return (
    <div className="body">
      <div class="box">
        <span style={{ '--i': 1 }}>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image1"
          />
        </span>
        <span style={{ '--i': 2 }}>
          <img
            src="https://images.pexels.com/photos/4906490/pexels-photo-4906490.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2"
            alt="image2"
          />
        </span>
        <span style={{ '--i': 3 }}>
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image3"
          />
        </span>
        <span style={{ '--i': 4 }}>
          <img
            src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image4"
          />
        </span>
        <span style={{ '--i': 5 }}>
          <img
            src="https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image5"
          />
        </span>
        <span style={{ '--i': 6 }}>
          <img
            src="https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image6"
          />
        </span>
        <span style={{ '--i': 7 }}>
          <img
            src="https://images.pexels.com/photos/1139784/pexels-photo-1139784.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image7"
          />
        </span>
        <span style={{ '--i': 8 }}>
          <img
            src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="image8"
          />
        </span>
      </div>
      <footer></footer>
    </div>
  );
};

export default Spinner;
