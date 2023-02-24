import Card from '../card/Card';
import './content.css';
// const imgArray1 = [
//   {
//     title: 'Soups',
//     url: 'https://soupx.in/img/new-upload/top-categories/1.png',
//   },
//   {
//     title: 'Salad',
//     url: 'https://soupx.in/img/new-upload/top-categories/5.png',
//   },
//   {
//     title: 'Healthy Sandwich',
//     url: 'https://soupx.in/img/new-upload/top-categories/2.png',
//   },
// ];
// const imgArray2 = [
//   {
//     title: 'Whole Wheat Pasta',
//     url: 'https://soupx.in/img/new-upload/top-categories/6.png',
//   },
//   {
//     title: 'Healthy Smoothies',
//     url: 'https://soupx.in/img/new-upload/top-categories/3.png',
//   },
//   {
//     title: 'Oatmeal',
//     url: 'https://soupx.in/img/new-upload/top-categories/4.png',
//   },
// ];
const imgArray1 = [
  {
    title: 'Turnkey Interiors Contractor',
    url: 'https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Interior Design Consultant',
    url: 'https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Gypsum False Ceiling Contractor',
    url: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const imgArray2 = [
  {
    title: 'Gypsum False Ceiling Contractor',
    url: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Turnkey Interiors Contractor',
    url: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Traditional Interior',
    url: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
const Content = () => {
  return (
    <div className="content container">
      <h1 style={{ textAlign: 'center', color: 'yellow' }}>
        Popular Categories
      </h1>
      <hr />
      <div className="content-cards">
        {imgArray1.map((item) => {
          return <Card title={item.title} url={item.url} key={item.title} />;
        })}
      </div>
      <div className="content-cards">
        {imgArray2.map((item) => {
          return <Card title={item.title} url={item.url} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default Content;
