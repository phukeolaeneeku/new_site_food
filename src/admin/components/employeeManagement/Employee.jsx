import React, { useState } from "react";
import "./employee.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import profile from "../../../img/profile.jpg";


const Employee = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <>
      <section id="menager">
        <AdminMenu />
        <div className="container_body_adminuser">
          <div className="container_box_users">
            <div className="container_add_admin">
              <h2>Employees</h2>
              <Link to="/add-employee" className="btn_addadmins">
                <BiPlus id="icon_add_admin" />
                Add employee
              </Link>
            </div>

            <div className="box_users_admin">
              <div className="box_dp_txtandiamge">
                <div className="box_user_img">
                  <img src={profile} alt="img" />
                </div>
                <div className="box_user_text">
                  <p>Name</p>
                  <p>Phone</p>
                </div>
              </div>
              <div className="btn_box_Cont">
                <button
                  className="btn_delete"
                  onClick={() => setShowConfirmation(true)}
                >
                  Delete
                </button>
                <Link to="/edit-employee" className="btn_edit">
                  View
                </Link>
              </div>
              {showConfirmation && (
                <div className="background_addproductpopup_box">
                  <div className="hover_addproductpopup_box">
                    <div className="box_logout">
                      <p>Are you sure you want to delete</p>
                    </div>
                    <div className="btn_foasdf">
                      <button
                        className="btn_cancel btn_addproducttxt_popup"
                        onClick={() => setShowConfirmation(false)}
                      >
                        No
                      </button>
                      <button className="btn_confirm btn_addproducttxt_popup">
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="box_container_next_resume">
              <button className="box_prev_left_resume">Prev</button>
              <div className="box_num_resume">
                <button className="num_admin_resume">1</button>
              </div>
              <button className="box_prev_right_resume">Next</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;
