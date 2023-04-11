import Card from "../card/Card";
import "./content.css";

const imgArray1 = [
  {
    title: "Turnkey Interiors Contractor",
    url: "https://www.cherryhill.in/img/flovel/flovel9.jpg",
    path: "/services/turnkey-interior",
  },
  {
    title: "Interior Design Consultant",
    url: "https://www.cherryhill.in/img/gepower/(1).jpg",
    path: "/services/interior-design",
  },
  {
    title: "Gypsum False Ceiling Contractor",
    url: "https://www.cherryhill.in/img/wipro-channai/wipro-6.jpg",
    path: "/services/gypsum-false",
  },
];

const imgArray2 = [
  {
    title: "Corporate Office Interior Contractor",
    url: "https://www.cherryhill.in/img/gepower/(8).jpg",
    path: "/services/corporate-office",
  },
  {
    title: "Office Furniture",
    url: "https://www.cherryhill.in/img/verint/5.jpg",
    path: "/services/office-furniture",
  },
  {
    title: "Gypsum Partition Contractor",
    path: "/services/gypsum-partition",
    url: "https://www.cherryhill.in/img/flovel/flovel.jpg",
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
