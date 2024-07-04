import React, { useState, useEffect } from "react";
import "./order.css";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { Link, useNavigate } from "react-router-dom";
import logo_resoure from "../../img/logo_resoure.jpeg";
import { CiTimer } from "react-icons/ci";
const Order = () => {
  return (
    <>
      <Header />
      <section id="container_order_item">
        <div className="container_order_all">
          <h2>Order history<CiTimer /></h2>
          <div className="box_order_history_container">

            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">ID: 1</div>
              <div className="item_order_text">User</div>
              <div className="item_order_text">Date: 12/2/2024</div>
              <div className="item_order_text">Status: Panding</div>
            </Link>

            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">ID: 1</div>
              <div className="item_order_text">User</div>
              <div className="item_order_text">Date: 12/2/2024</div>
              <div className="item_order_text">Status: Panding</div>
            </Link>

            <Link to="/bill" className="box_item_order">
              <div className="item_order_text">ID: 1</div>
              <div className="item_order_text">User</div>
              <div className="item_order_text">Date: 12/2/2024</div>
              <div className="item_order_text">Status: Panding</div>
            </Link>

          </div>
        </div>

      </section>
      <Menu />
    </>
  );
};

export default Order;
