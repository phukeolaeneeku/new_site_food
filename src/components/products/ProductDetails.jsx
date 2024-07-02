import React from "react";
import { Link } from "react-router-dom";
import "./productDetails.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import productImage from "../../img/productImage.png";

function ProductDetails() {
  return (
    <>
      <Header />
      <div className="contentBody">
        <div className="box_betavinOfob">
          <div>
            <form className="boxProduct_deteils">
              <div className="product-page-img">
                <img src={productImage} alt="img" />
              </div>
              <div className="txtContentproduct">
                <h1 className="txt_nameP">Name...</h1>
                <p className="money_txt">$ Price...</p>
                <p className="txt_description">Description...</p>

                <div className="size_product">
                  <p>Color:</p>
                  <div className="size">
                    <p className="active echSize echSize">Color</p>
                  </div>
                </div>
                <div className="size_product">
                  <p>Size:</p>
                  <div className="size">
                    <p className="active echSize echSize">Size</p>
                  </div>
                </div>
                <div className="container_item_icon">
                  <div className="container_minus_plus">-</div>
                  <span>1</span>
                  <div className="container_minus_plus">+</div>
                </div>
                <div className="Count_product">
                  <Link className="echbtn btnBut">Buy Now</Link>
                  <Link className="echbtn btnAdd">Add To Cart</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <h2 className="box_betavinOfob asd2">
          <span className="spennofStyle"> </span>
          More products
        </h2>
        <div className="product-area">
          <div className="box-product">
            <Link to="#">
              <div className="img">
                <img src={productImage} alt="image" />
              </div>
              <ul className="txtOFproduct2">
                <li className="name">Name...</li>
                <li className="price">$ Price...</li>
                <li className="desc">Description...</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>

      <Menu />
    </>
  );
}

export default ProductDetails;
