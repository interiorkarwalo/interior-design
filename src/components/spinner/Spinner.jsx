import { Link } from "react-router-dom";
import "./spinner.css";
const Spinner = () => {
  const arrayImg = {
    one: "https://www.cherryhill.in/img/verint/6/5.jpg",
    two: "https://www.cherryhill.in/img/bny/bny10.jpg",
    three: "https://www.cherryhill.in/img/tcl/tcl-4.jpg",
    four: "https://www.cherryhill.in/img/wipro-channai/wipro-5.jpg",
    five: "https://www.cherryhill.in/img/wipro-channai/wipro-7.jpg",
    six: "https://www.cherryhill.in/img/Mindtree/mindtree19.jpg",
  };

  return (
    <div className="body">
      <div className="spinner-title">
        <h1>Be inspired by what you see</h1>
        <p style={{ marginTop: "5px" }}>All you need to create your space</p>
      </div>
      <Link to="/services/gypsum-partition">
        <div class="box">
          {/* <Link to="/services"> */}
          <span style={{ "--i": 3 }}>
            <img src={arrayImg.six} alt="image1" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 2 }}>
            <img
              src="https://media.istockphoto.com/id/1354262369/photo/mock-up-poster-frame-in-modern-interior-background-living-room-scandinavian-style-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=_Hy3y9kx7kUejKVbdcwAHJpzQwrntc16jA1Tq6YmF00="
              alt="image2"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 5 }}>
            <img src={arrayImg.two} alt="image4" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 1 }}>
            <img src={arrayImg.one} alt="image3" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 6 }}>
            <img src={arrayImg.three} alt="image5" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 7 }}>
            <img src={arrayImg.four} alt="image8" />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 4 }}>
            <img
              src="https://media.istockphoto.com/id/822648232/photo/living-room-with-fireplace.jpg?s=612x612&w=0&k=20&c=gcKtSYuQKxb_6Zht4zfe7eYQUIOgHQZ70WCmkUxjti0="
              alt="image7"
            />
          </span>
          {/* </Link> */}
          {/* <Link to="/services"> */}
          <span style={{ "--i": 8 }}>
            <img src={arrayImg.five} alt="image6" />
          </span>
          {/* </Link> */}
        </div>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Spinner;
