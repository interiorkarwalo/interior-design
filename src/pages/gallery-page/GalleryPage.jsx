/* eslint-disable react-hooks/rules-of-hooks */
import { Dropdown, Space } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import allImageLinks from "../../utils/imageLinks";
import "./gallery-page.css";
import Header from "../../components/header/Header";

const galleryPage = () => {
  const [category, setCategory] = useState(0);
  const [mainImage, setMainImage] = useState(allImageLinks[0][0]);

  const categoriesList = ["chair", "sofa", "bed", "table", "wardrobe"];

  const items = [
    { key: 0, label: categoriesList[0] },
    { key: 1, label: categoriesList[1] },
    { key: 2, label: categoriesList[2] },
    { key: 3, label: categoriesList[3] },
    { key: 4, label: categoriesList[4] },
  ];
  return (
    <div>
      <Header />
      <div style={{ height: "100px" }} />
      <div>
        <Dropdown
          className="a-dropDown"
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ["chair"],
            onSelect: (e) => {
              setCategory(e.selectedKeys[0]);
              setMainImage(allImageLinks[e.selectedKeys[0]][0]);
            },
          }}
          trigger={"click"}
          arrow={"true"}
        >
          <div className="a-dropdown">
            <p>
              {categoriesList[category]}{" "}
              <DownOutlined style={{ fontSize: 25 }} />
            </p>
          </div>
        </Dropdown>
        <div>
          <div className="a-mainImage">
            <img src={mainImage} alt={category} />
          </div>
          <div className="a-row">
            <img
              src={allImageLinks[category][0]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][0]);
              }}
            />
            <img
              src={allImageLinks[category][1]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][1]);
              }}
            />
            <img
              src={allImageLinks[category][2]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][2]);
              }}
            />
            <img
              src={allImageLinks[category][3]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][3]);
              }}
            />
            <img
              src={allImageLinks[category][4]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][4]);
              }}
            />
            <img
              src={allImageLinks[category][5]}
              alt={category}
              onMouseEnter={() => {
                setMainImage(allImageLinks[category][5]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default galleryPage;
