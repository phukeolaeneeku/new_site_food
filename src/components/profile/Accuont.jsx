import React from "react";
import "./account.css";
import { MdDelete } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { MdStorefront } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import profile from "../../img/profile.jpg";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";

export const Accuont = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationDelete, setShowConfirmationDelete] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
    
    return;
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };
  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteAccount();
    setShowConfirmationDelete(false);
  };
  const handleCancelDelete = () => {
    setShowConfirmationDelete(false);
  };


  //Function Delete
  const handleDeleteAccount = async () => {
    alert("ID...")
  };

  return (
    <>
      <Header />
      <h3>Setting Account</h3>
      <div className="MorePage">
        <div className="profile_box">
          <div className="left_box">
            
              <img src={profile} alt="img" />
            <div className="user_name">
              Name...
            </div>
          </div>
          <Link to="/profileedit" className="right_box">
            <button>View</button>
          </Link>
        </div>

        <div className="more-menu-list">

            <div>
              <hr className="hr" />
              <Link to="/additional-seller" className="menu_icon">
                <MdStorefront id="icon_more" />
                <p className="txtP">Additional seller informaction</p>
              </Link>
            </div>

          <hr className="hr" />
          <div onClick={() => setShowConfirmation(true)} className="menu_icon">
            <IoLogOutOutline id="icon_more" />
            <p className="txtP">Log out </p>
          </div>
          {showConfirmation && (
            <div className="background_addproductpopup_box">
              <div className="hover_addproductpopup_boxs">
                <div className="box_logout">
                  <p>Are you sure you want to log out?</p>
                </div>
                <div className="btn_foasdf">
                  <button
                    className="btn_cancel btn_addproducttxt_popup"
                    onClick={handleCancelLogout}
                  >
                    No
                  </button>
                  <button
                    className="btn_confirm btn_addproducttxt_popup"
                    onClick={handleConfirmLogout}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}

          <hr className="hr" />
          <div
            className="menu_icon"
            onClick={() => setShowConfirmationDelete(true)}
          >
            <MdDelete id="icon_more" />
            <p className="txtP">Delete account</p>
          </div>

          {showConfirmationDelete && (
           
            <div className="background_addproductpopup_box">
              <div className="hover_addproductpopup_boxs">
                <div className="box_logout">
                  <p>Are you sure you want to Delete?</p>
                </div>
                <div className="btn_foasdf">
                  <button
                    className="btn_cancel btn_addproducttxt_popup"
                    onClick={handleCancelDelete}
                  >
                    No
                  </button>
                  <button
                    className="btn_confirm btn_addproducttxt_popup"
                    onClick={handleConfirmDelete}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}

          <hr className="hr" />
        </div>
      </div>
      <Menu />
    </>
  );
};
export default Accuont;
