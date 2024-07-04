import React from "react";
import "./addemployee.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { LuUser } from "react-icons/lu";
import { BiPlus } from "react-icons/bi";
import { MdOutlinePhonePaused } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlineCountertops } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const AddEmployee = () => {
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        <div className="box_addAdmin">
          <form>
            <div className="addAdminForm">
              <div className="boxhead_subminandtitle">
                <h2 className="titleaddmin">Add employee</h2>
                <div>
                  <button type="submit" className="btn_add_employee">
                    <BiPlus id="icon_add_admin" />
                    Add employee
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
                <label htmlFor="role" className="titlelabel">
                  Role:
                </label>
                <div className="boxiconnandinput">
                  <MdOutlineCountertops className="iconinput" />

                  <select name="role" className="input_select" >
                    <option value="">Select role</option>
                    <option value="">...</option>
                    <option value="">...</option>
                  </select>
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
};

export default AddEmployee;
