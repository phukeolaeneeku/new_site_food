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
          <h2>Order history</h2>
          <div className="box_order_history_container">
            <div className="title_order_history">
              <div className="box_title_order">ID</div>
              <div className="box_title_order">Name</div>
              <div className="box_title_order">Quantity</div>
              <div className="box_title_order">Status</div>
            </div>

            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">1</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
            </Link>
            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">1</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
            </Link>
            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">1</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
              <div className="item_order_text">name</div>
            </Link>
          </div>
        </div>

      </section>
      <Menu />
    </>
  );
};

export default Order;
