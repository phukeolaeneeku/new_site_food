import "./addAdmin.css";
import AdminMenu from "../adminMenu/AdminMenu";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { Link} from "react-router-dom";

const EditAdmin = () => {
  return (
    <>
      <AdminMenu />
      <section id="addAmin">
        
        <div className="box_addAdmin">
          <form >
            <div className="addAdminForm">
              <div className="boxhead_subminandtitle">
                <h2 className="titleaddmin">Edit Admin</h2>
                <div>
                  <button type="submit" className="submit">
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
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Email address..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="nickname" className="titlelabel">
                  Nick name:
                </label>
                <div className="boxiconnandinput">
                  <LuUser className="iconinput" />
                  <input
                    type="text"
                    id="nickname"
                    className="input"
                    placeholder="Nick name..."
                  />
                </div>
              </div>

              <div className="add-box">
                <label htmlFor="adminImage" className="titlelabel">
                  Profile image:
                </label>
                <div className="boxiconnandinput">
                  <CiImageOn className="iconinput" />
                  <input
                    type="file"
                    className="input"
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

export default EditAdmin;
