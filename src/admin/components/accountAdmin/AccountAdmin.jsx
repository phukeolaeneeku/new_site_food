import React from "react";
import "./accountAdmin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdAddLocationAlt } from "react-icons/md";

import { Link } from "react-router-dom";

function AccountAdmin() {
  

  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <form >
            <div className="addAdminForm">
              <div className="boxhead_subminandtitle">
                <h2 className="titleaddmin">Admin Account</h2>
                <div className="btn_boxAcouunt">
        
                  <button type="submit" className="submit_add">
                    Update
                  </button>
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">
                  Email:
                </label>
                <div className="boxiconnandinput">
                  <MdOutlineEmail className="iconinput" />
                  <input
                    type="text"
                    id="email"
                    className="input"
                    placeholder="Email address..."
                    required
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">
                  Name:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="fname"
                    className="input"
                    placeholder="Name..."
                    required
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="phone" className="titlelabel">
                  Address:
                </label>
                <div className="boxiconnandinput">
                  <MdAddLocationAlt className="iconinput" />
                  <input
                    type="text"
                    name="address"
                    className="input"
                    placeholder="Address (required) "
                    required
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="phone" className="titlelabel">
                  Phone number:
                </label>
                <div className="boxiconnandinput">
                  <FiPhone className="iconinput" />
                  <input
                    type="text"
                    id="phone"
                    className="input"
                    placeholder="Phone number..."
                    required
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="profile" className="titlelabel">
                  Profile image:
                </label>
                <div className="boxiconnandinput">
                  <CgProfile className="iconinput" />
                  <input
                    type="file"
                    id="profile"
                    className="input_select"
                    placeholder="Profile image..."
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AccountAdmin;
