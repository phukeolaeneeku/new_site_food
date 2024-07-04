import React from "react";
import "./payment.css";
import Menu from "../menuFooter/Menu";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { FiCopy } from "react-icons/fi";
import productImage from "../../img/productImage.png";

const Payment = () => {
  return (
    <>
      <Header />
      <div className="guopBoxPayment_container">
        <h2 className="h2_boxPayment">Payment</h2>
        <div className="adress_payment_content">
          <h2>Orders items:</h2>
          <div className="box_item_detail_order">
            <div className="box_item_order_list">
              <img src={productImage} alt="" />
              <div className="box_item_order_text">
                <p>Name: Bag</p>
                <p>Price: 15</p>
                <p>Quantity:2</p>
              </div>
            </div>
            <div className="box_item_order_list">
              <img src={productImage} alt="" />
              <div className="box_item_order_text">
                <p>Name: Bag</p>
                <p>Price: 15</p>
                <p>Quantity:2</p>
              </div>
            </div>
          </div>

          <div className="box_address">
            <h2>Address:</h2>
            <form className="box_address_input">
              <div className="box">
                <label htmlFor="prov">Contact number:</label>
                <input type="text" id="prov" />
              </div>
              <div className="box">
                <label htmlFor="prov">Province:</label>
                <input type="text" id="prov" />
              </div>
              <div className="box">
                <label htmlFor="city">District:</label>
                <input type="text" id="city" />
              </div>
              <div className="box">
                <label htmlFor="companny">Shipping Companny name:</label>
                <input type="text" id="companny" />
              </div>
              <div className="box">
                <label htmlFor="branch">Branch:</label>
                <input type="text" id="branch" />
              </div>
              <div className="box">
                <label htmlFor="branch">Account name:</label>
                <input type="text" id="prov" />
              </div>
            </form>
          </div>
          <div className="box_transfer">
            <p className="box_transfer_p_line">Total Price:</p>
          </div>
          <div className="box_transfer">
            <p className="box_transfer_p_line">
              Please transfer money to this account
            </p>
            <div className="boxaccount_number">
              <div className="boxaccount_number_p">
                <p>Account number</p>
                <p>123456</p>
              </div>
              <FiCopy className="iconnn_copy_account" />
            </div>
          </div>
          <button className="save">Confirm</button>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Payment;
