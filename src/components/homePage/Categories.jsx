import React from "react";
import "./categories.css";
import productImage from "../../img/productImage.png";
import Expandable from "./Expandable";


const Categories = () => {
  
  const categories = [
    { id: 1, name: "Category 1 sdfs df dge er wef" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];

  return (
    <div className="box_category_container">
      {categories.map((category, index) => (
        <div className="box-categories" key={index}>
          <div className="Box_image">
            <img src={productImage} alt={category.name} />
          </div>
          <Expandable>{category.name}</Expandable>
        </div>
      ))}
    </div>
  );
};

export default Categories;
