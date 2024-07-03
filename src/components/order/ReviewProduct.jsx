import React from "react";
import "./review.css";
import { Link } from "react-router-dom";
import "../products/productBuy.css";
import Menu from "../menuFooter/Menu";
import Header from "../header/Header";
import { IoIosArrowBack } from "react-icons/io";
import productImage from "../../img/productImage.png";

function ReviewProduct() {
  return (
    <>
      <Header />

      <div className="contentBody">
        <Link to="/bill" className="box_container_back">
          <IoIosArrowBack id="icons_back" />
          <p>Back</p>
        </Link>
        <div>
          <form className="boxProduct_deteils">
            <div className="product-page-img">
              <img src={productImage} alt="img" />
            </div>
            <div className="txtContentproduct">
              <h4 className="txt_nameP">Name...</h4>
              <p className="money_txt">$ Price...</p>
              <hr />

              <div className="box_comments">
                <h3>Already commented.</h3> <br />
                <div className="txt_review">
                  <p>Comment: </p>
                  <p>Rating: </p>
                  <p>Date: 3/7/2024</p>
                </div>
              </div>
            </div>

            <div className="box_leave_review">
              <h2>Leave a Review</h2>
              <div className="box_container_start">
                {[...Array(5)].map((_, index) => (
                  <span className="icon_start_review"
                    style={{
                      fontSize: "25px",
                      cursor: "pointer",
                      color: "#FFD700",
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <form className="container_textarea">
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Write your review here..."
                />
                <button
                  type="submit" className="btn_review"
                >
                  Submit
                </button>
              </form>
            </div>
          </form>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default ReviewProduct;
