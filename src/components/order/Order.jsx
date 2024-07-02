import React, { useState, useEffect } from "react";
import "./order.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { Link, useNavigate } from "react-router-dom";
import logo_resoure from "../../img/logo_resoure.jpeg";

const Order = () => {
  return (
    <>
      <Header />
      <section id="container_order_item">
        <div className="container_order_all">
          <h2>Order</h2>

          <Link to="/bill" className="box_item_order">
            <div className="box_item_order_text">
              <p>ID:..</p>
              <p>Date Time:...</p>
            </div>
            <div className="txtheadeproductorder">
              <p>Status:..</p>
            </div>
          </Link>
        </div>

        <>
          <h2 className="box_betavinOfob asd2">
            <span className="spennofStyle" />
            Items
          </h2>
          <div className="product-area">
            <div className="box-product">
              <Link to="">
                <div className="img">
                  <img src={logo_resoure} alt="image" />
                </div>

                <ul className="txtOFproduct2">
                  <li className="name">Name...</li>
                  <li className="price">Price...</li>
                </ul>
              </Link>
            </div>
          </div>
        </>
      </section>
      <Menu />
    </>
  );
};

export default Order;
