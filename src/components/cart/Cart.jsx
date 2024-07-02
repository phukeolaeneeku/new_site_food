import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import productImage from "../../img/productImage.png";
import logo_resoure from "../../img/logo_resoure.jpeg";
import { AiOutlineDelete } from "react-icons/ai";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <Header />
      <div className="box_cart_container">
        <div className="store">
          <h3>Cart</h3>
            <div className="box_item_image">
              <img src={productImage} alt="img" />
              <div className="box_item_text">
                <p>name: </p>
                <p>price..</p>
              </div>
              <div className="box_icon_order">
                <div className="btnicon_delete_order">
                  <AiOutlineDelete id="btnicon_delete" />
                </div>
                <div className="box_item_icon">
                  <div className="icon_minus_plus">-</div>
                  <span>1</span>
                  <div className="icon_minus_plus">+</div>
                </div>
              </div>
            </div>

            <div className="box_item_image">
              <img src={logo_resoure} alt="img" />
              <div className="box_item_text">
                <p>name: </p>
                <p>price..</p>
              </div>
              <div className="box_icon_order">
                <div className="btnicon_delete_order">
                  <AiOutlineDelete id="btnicon_delete" />
                </div>
                <div className="box_item_icon">
                  <div className="icon_minus_plus">-</div>
                  <span>1</span>
                  <div className="icon_minus_plus">+</div>
                </div>
              </div>
            </div>
        </div>
        <div className="box_item_total">
          <div className="cart_Total_box">
            <h2>Cart Total:</h2>
            <div className="box_item_total_text">
              <p>Quantity: 20</p>
              <p> Items: 5</p>
            </div>
            <hr />
            <div className="box_item_total_text">
              <p className="txt_Total">Total: </p>
              <p>$100</p>
            </div>
            <div className="btn">
              <button className="checkout_btn">Checkout</button>
            </div>
          </div>
        </div>
        <h2 className="box_betavinOfob asd2">
          <span className="spennofStyle" />
          Shopping
        </h2>
        <div className="product-area">
          <div className="box-product">
            <Link to="">
              <div className="img">
                <img src={productImage} alt="image" />
              </div>

              <ul className="txtOFproduct2">
                <li className="name">Name...</li>
                <li className="price">Price...</li>
              </ul>
            </Link>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Cart;
