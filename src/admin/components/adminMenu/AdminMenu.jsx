import "./adminMenu.css";
import { IoDocumentText, IoLogOutOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { LiaUserCogSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import user from "../../../img/user.png";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
import imageicon from "../../../img/imageicon.jpg";
import { CiBank } from "react-icons/ci";
import logo_resoure2 from "../../../img/logo_resoure2.jpeg";

const AdminMenu = () => {
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    return;
  };
  const handleConfirmLogout = () => {
    handleLogout();
    setShowConfirmation(false);
  };
  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <section id="dashboard">
        <div className="left">
          <div className="menu">
            <NavLink to="/dashboard" className="link">
              <RxDashboard />
              <p>Dashboard</p>
            </NavLink>
            <NavLink to="/product-admin" className="link">
              <IoDocumentText />
              <p>Products</p>
            </NavLink>
            <>
              <NavLink to="/store-admin" className="link">
                <HiOutlineBuildingStorefront />
                <p>Stores</p>
              </NavLink>
              <NavLink to="/users" className="link">
                <BiUser />
                <p>Users</p>
              </NavLink>
              <NavLink to="/admins" className="link">
                <LiaUserCogSolid />
                <p>Admins</p>
              </NavLink>
            </>
            <NavLink to="/payment-store" className="link">
              <CiBank />
              <p>Bank</p>
            </NavLink>

            <div onClick={() => setShowConfirmation(true)} className="link">
              <IoLogOutOutline />
              <p>Log Out</p>
            </div>
            {showConfirmation && (
              <div className="background_addproductpopup_box">
                <div className="hover_addproductpopup_box">
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
          </div>

          <div className="right">
            <div className="box_popupImage_logo">
              <NavLink to="/" className="logo">
                <img src={logo_resoure2} alt="" />
              </NavLink>
              <div className="popup_image_logo" >
                <CiCamera id="box_icon_camera" />
              </div>
            </div>
            <div className="boximage_admin">
              <NavLink to="/account-admin" className="userAdminImage">
                <p>Email...</p>
                <img src={user} alt="admin profile" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminMenu;
