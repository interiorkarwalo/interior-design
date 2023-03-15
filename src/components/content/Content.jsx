import Card from "../card/Card";
import "./content.css";

const imgArray1 = [
  {
    title: "Turnkey Interiors Contractor",
    url: "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/turnkey-interior",
  },
  {
    title: "Interior Design Consultant",
    url: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/interior-design",
  },
  {
    title: "Gypsum False Ceiling Contractor",
    url: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/gypsum-false",
  },
];

const imgArray2 = [
  {
    title: "Corporate Office Interior Contractor",
    url: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/corporate-office",
  },
  {
    title: "Office Furniture",
    url: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/office-furniture",
  },
  {
    title: "Gypsum Partition Contractor",
    url: "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600",
    path: "/services/gypsum-partition",
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
