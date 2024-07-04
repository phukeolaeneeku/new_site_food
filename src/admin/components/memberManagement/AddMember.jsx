import React from "react";
import "./addMember.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { LuUser } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";
import { MdOutlinePhonePaused } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";

const AddMember = () => {
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <form>
            <div className="addAdminForm">
              <div className="boxhead_subminandtitle">
                <h2 className="titleaddmin">Add Member</h2>
                <div>
                  <button type="submit" className="submit">
                    Add member
                  </button>
                </div>
              </div>

              

              <div className="add-box">
                <label htmlFor="fname" className="titlelabel">
                  First name:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="fname"
                    className="input"
                    placeholder="First name..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="lname" className="titlelabel">
                  Last name:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="lname"
                    className="input"
                    placeholder="Last name..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="email" className="titlelabel">
                  Email:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="email"
                    className="input"
                    placeholder="Email..."
                  />
                </div>
              </div>
              <div className="add-box">
                <label htmlFor="password" className="titlelabel">
                  Password:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="password"
                    className="input"
                    placeholder="Password..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="phone" className="titlelabel">
                  Phone number:
                </label>
                <div className="boxiconnandinput">
                  <MdOutlinePhonePaused className="iconinput" />
                  <input
                    type="text"
                    id="phone"
                    className="input"
                    placeholder="Phone number..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="address" className="titlelabel">
                  Address:
                </label>
                <div className="boxiconnandinput">
                  <RiMapPinLine className="iconinput" />
                  <input
                    type="text"
                    id="address"
                    className="input"
                    placeholder="Address..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="profile" className="titlelabel">
                  Profile image:
                </label>
                <div className="boxiconnandinput">
                  <CiImageOn className="iconinput" />
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
};

export default AddMember;