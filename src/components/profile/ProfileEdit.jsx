import React, { useState, useEffect } from "react";
import "./profileedit.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import user from "../../img/user.png";
import Header from "../header/Header";
import Menu from "../menuFooter/Menu";

const ProfileEdit = () => {
  return (
    <>
      <Header />
      <div className="ProfilePage_edit">
        <div className="boxgoback">
          <Link to="/more" className="box_iconBack">
            <MdArrowBack id="iconBack" />
          </Link>
        </div>
        <div className="box_name">
          <div className="box_image_profile">
            <label htmlFor="profileImage">
              <img src={user} alt="img" />

              <p>
                <FaCamera id="icon_camera" />
              </p>
            </label>

            <input type="file" id="profileImage" accept="image/*" />
          </div>
          <p>Name...</p>
        </div>
        <div className="box_user_profile">
          <p>User</p>
          <FaRegUserCircle id="iconUser" />
        </div>
        <form className="container_form_profileedit">
          <input type="email" placeholder="Please enter your email" />
          <input
            id="origin_password"
            type="password"
            placeholder=" Please enter your current password "
          />
          <input
            id="password"
            type="password"
            placeholder=" Please enter a new password "
          />
          <input
            id="password2"
            type="password"
            placeholder=" Please confirm your new password "
          />

          <button type="submit">Confirmation</button>
        </form>
      </div>
      <Menu />
    </>
  );
};

export default ProfileEdit;
