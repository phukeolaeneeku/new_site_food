import React, { useState } from "react";
import "./user_details.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import profile from "../../../img/profile.jpg";
import imageicon from "../../../img/imageicon.jpg";

const User_details = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <form>
            <div className="addAdminForm">
              <h2>User Details</h2>
              <div className="del-update">
                <div className="del" onClick={() => setShowConfirmation(true)}>
                  <AiOutlineDelete />
                </div>
              </div>
              
              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">
                  Nickname:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <div className="input">
                    <p>Nickname</p>
                  </div>
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">
                  Email:
                </label>
                <div className="boxiconnandinput">
                  <MdOutlineEmail className="iconinput" />
                  <div className="input">
                    <p>Email</p>
                  </div>
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">
                  Password:
                </label>
                <div className="boxiconnandinput">
                  <IoKeyOutline className="iconinput" />
                  <div className="input">
                    <p>Password</p>
                  </div>
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="adminImage" className="titlelabel">
                  Profile image:
                </label>
                <div className="BorderinputThenImage">
                  <div className="input">
                    <img src={imageicon} alt="admin profile" />
                  </div>
                </div>
              </div>
              {showConfirmation && (
                <div className="background_addproductpopup_box">
                  <div className="hover_addproductpopup_box">
                    <div className="box_logout">
                      <p>Are you sure you want to delete?</p>
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
          </form>
        </div>
      </section>
    </>
  );
};

export default User_details;
