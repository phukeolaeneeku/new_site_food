import Header from "../header/Header";
import Menu from "../menuFooter/Menu";
import { IoIosArrowBack } from "react-icons/io";
import "./bill.css";
import { Link } from "react-router-dom";

const Bill = () => {
  return (
    <>
      <Header></Header>
      <div className="bill">
        <Link to="/order" className="box_container_back_icons_backs">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div className="bill-detial">
          <div className="guopoidHead">
            <div className="idf">
              <p>Order ID:</p>
              <p>Date:</p>
            </div>
          </div>
          <div className="billGopBox">
            <table>
              <thead className="txt_colBill">
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>name</td>
                  <td>120$</td>
                  <td>2</td>
                  <td>Panding</td>

                  <th>
                    {/* <button className="Delivered_review">Review</button> */}
                    <Link to="/review-product" className="Delivered_review">Review</Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="titlePrice">
            <p>Total:</p>
            <p>$111</p>
          </div>
          <div className="box_place">
            <div className="place-on">
              <p>Place on: BCEL</p>
              <p>Payment method: Transfer</p>
              <p>Contact number: +85620</p>
              <p>Status: </p>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Bill;
