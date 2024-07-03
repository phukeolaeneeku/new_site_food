import React, {useState} from "react";
import "./users.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { Link } from "react-router-dom";
import profile from "../../../img/profile.jpg";

const Users = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <>
      <AdminMenu />
      <div className="container_body_adminuser">
        <div className="container_box_adminusers">
          <div className="box_users">
            <h2>Users</h2>
            {/* <form className="search">
              <div className="search-box_menageruser">
                <input type="text" placeholder="Search ..." />
                <button type="submit">
                  <IoSearchOutline />
                </button>
              </div>
            </form> */}
          </div>

          <div className="box_users_user">
            <div className="box_dp_txtandiamge">
              <div className="box_user_img">
                <img src={profile} alt="img" />
              </div>
              <div className="box_user_text">
                <p>Nickname...</p>
                <p>Email...</p>
              </div>
            </div>
            <div className="btn_box_Cont">
              <button
                className="delete_storeDetails"
                onClick={() => setShowConfirmation(true)}
              >
                Delete
              </button>
              <Link to="/user-details" className="viewMore_storeDetails">
                View
              </Link>
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
                    <button
                      className="btn_confirm btn_addproducttxt_popup"
                    >
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
    </>
  );
};

export default Users;
