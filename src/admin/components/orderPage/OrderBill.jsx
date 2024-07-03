import React from "react";
import "./orderBill.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderBill = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <AdminMenu />
      <section id="abill">
        <div className="abill-detial">
          <div className="container_Order_Bill">
            <Link to={goBack} className="back_Order_Bill">
              <FaAngleLeft id="box_icon_Back" />
              <p>Back</p>
            </Link>
            <h2>Orders</h2>
            <div></div>
          </div>
          <div className="aguopoidHead">
            <div className="aidf">
              <p>OrderID:...</p>
              <p>User: Omg</p>
            </div>
          </div>
          <hr />
          <div className="abillGopBox">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item name</td>
                  <td>100</td>
                  <td>Quantity</td>
                </tr>
                <tr>
                  <td>Item name</td>
                  <td>100</td>
                  <td>Quantity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="atitlePrice">
            <h3>Total:</h3>
            <h3>$100</h3>
          </div>
          <div className="aplace-on">
            <div className="container_aplace">
              <div className="box_places">
                <p>Payment date:</p>
                <p>Payment method: Transfer</p>
                <p>Account name: ...</p>
                <p>Status: ...</p>
                <p>Delivery: ..., Province:..., Destrict: ..., Branch: ...</p>
              </div>
            </div>
            
          </div>
          <form>
              <div className="status btn">
                <button type="submit" className="aplace_form_button ">
                  Confirm
                </button>
              </div>
            </form>
        </div>
      </section>
    </>
  );
};

export default OrderBill;
