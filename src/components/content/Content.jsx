import Card from "../card/Card";
import "./content.css";

const imgArray1 = [
  {
    title: "Turnkey Interiors Contractor",
    url: "public/blog/1.jpg",
    path: "/services/turnkey-interior",
  },
  {
    title: "Interior Design Consultant",
    url: "public/blog/(1).jpg",
    path: "/services/interior-design",
  },
  {
    title: "Gypsum False Ceiling Contractor",
    url: "public/blog/wipro-6.jpg",
    path: "/services/gypsum-false",
  },
];

const imgArray2 = [
  {
    title: "Corporate Office Interior Contractor",
    url: "public/blog/(8).jpg",
    path: "/services/corporate-office",
  },
  {
    title: "Office Furniture",
    url: "public/blog/tcl-1.jpg",
    path: "/services/office-furniture",
  },
  {
    title: "Gypsum Partition Contractor",
    path: "/services/gypsum-partition",
    url: "public/blog/slider3.jpg",
  },
];
const Content = () => {
  return (
    <div className="content container">
      <h1 style={{ textAlign: "center", color: "black" }}>Our Services</h1>
      <hr />
      <div className="content-cards">
        {imgArray1.map((item) => {
          return (
            <Card
              title={item.title}
              url={item.url}
              key={item.title}
              path={item.path}
            />
          );
        })}
      </div>
      <div className="content-cards">
        {imgArray2.map((item) => {
          return (
            <Card
              title={item.title}
              url={item.url}
              key={item.title}
              path={item.path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
