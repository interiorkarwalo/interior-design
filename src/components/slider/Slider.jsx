import Carousel from 'react-bootstrap/Carousel';
import './slider.css';

function Slider() {
  return (
    <div className="slider">
      <Carousel controls={false} fade={true}>
        <Carousel.Item interval={500}>
          <img
            // className="d-block w-100"
            src="/images/tour-1.jpeg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/main.jpeg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            // className="d-block w-100 h-50"
            src="/images/tour-2.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
