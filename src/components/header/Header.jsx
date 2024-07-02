import React, { useEffect, useState } from "react";
import "./header.css";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo_resoure2 from "../../img/logo_resoure2.jpeg";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section id="header">
        <div className="navbar">
          <div className="headWithBox">
            <div className="headMenu">
              <div className="logo1">
                <Link to="/">
                  <img src={logo_resoure2} alt="Logo" />
                </Link>
              </div>
              <div className="boxLiMenu">
                <div className="linkLi">
                  <Link to="/" className="link active">
                    Home
                  </Link>
                  <Link to="/order" className="link ">
                    Orders
                  </Link>
                </div>
              </div>
            </div>

            <div className="ulHead_box">
              <form className="search_wrap search_wrap_2">
                <div className="search_box">
                  <div className="btn_common">
                    <FaMagnifyingGlass className="iconSearch" />
                  </div>
                  <input
                    id="search"
                    type="text"
                    className="input_search_heaederr"
                    placeholder="search..."
                  ></input>
                </div>
              </form>

              <div className="right_ofHeadBox">
                <div className="userAndstore">
                  <Link to="/accuont">
                    <FaRegUser className="head_colorr" />
                  </Link>
                </div>
                <div className="userAndstore">
                  <Link to="/dashboard">
                    <HiOutlineBuildingStorefront className="head_colorr" />
                  </Link>
                </div>
                <div className="userAndstore">
                  <Link to="/dashboard">
                    <AiOutlineDashboard className="head_colorr" />
                  </Link>
                </div>
                <div className="boxsearchContainer">
                  <Link to="/cart">
                    <FaCartShopping className="head_colorr" />
                  </Link>
                </div>
                <div className="userAndstore">
                  <Link to="/loginuser" className="Box_icon_login_BiLogIn">
                    Login
                    <BiLogIn id="icon_BiLogIn" />
                  </Link>
                </div>
              </div>

              {/* <div className="right_ofHeadBox">
                  <div className="boxsearchContainer">
                    <Link to="/cart">
                      <FaCartShopping className="head_colorr" />
                    </Link>
                  </div>
                  <div className="userAndstore">
                    <Link to="/loginuser" className="Box_icon_login_BiLogIn">
                      Login 
                      <BiLogIn id="icon_BiLogIn" />
                    </Link>
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
