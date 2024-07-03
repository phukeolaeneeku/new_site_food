import React from "react";
import "./orderpage.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import AdminMenu from "../adminMenu/AdminMenu";
import { IoSearchOutline } from "react-icons/io5";
import { Link} from "react-router-dom";

const OrderProcess = () => {
  return (
    <>
      <AdminMenu />
      <section id="menager">
        <div className="container_box_orderpage">
          <div className="box_head_search">
            <h3>Orders Pending</h3>
            {/* <form className="search">
              <div className="search-box_menageruser">
                <input type="text" placeholder="Search ..." />
                <button type="submit">
                  <IoSearchOutline />
                </button>
              </div>
            </form> */}
          </div>

            <div className="box_users_order">
              <div className="box_order_text">
                <p>No: OrderID</p>
                <div>
                  <p>Name: Omg</p>
                </div>
              </div>
              <div className="box_container_time">
                <p>Date: 3/7/2024</p>
              </div>
              <div className="container_order_icon">
                <div className="btn_pending">Status</div>
                <Link to="/orderbill-admin "className="btn_view">
                  View
                </Link>
              </div>
            </div>


          <div className="box_container_next_product">
            <button className="box_prev_left_product">
              <AiOutlineLeft id="box_icon_left_right_product" />
              <p>Prev</p>
            </button>

            <div className="box_num_product">
              <div className="page-link">
                <div className="num_admin_product">
                  <p>1</p>
                </div>
              </div>
            </div>

            <button className="box_prev_right_product">
              <p>Next</p>
              <AiOutlineRight id="box_icon_left_right_product" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderProcess;
