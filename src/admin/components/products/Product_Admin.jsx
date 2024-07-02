import "./product_Admin.css";
import productImage from "../../../img/productImage.png";
import { Link } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import { BiPlus } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import imageicon from "../../../img/imageicon.jpg";
import banner_no from "../../../img/banner_no.jpg";

const Product_Admin = () => {
  return (
    <>
      <AdminMenu />
      <section id="product_admin">
        <div className="container_body_admin_product">
          <div className="productHead_content">
            <h1 className="htxthead">
              <span className="spennofStyleadmin"></span>Items
            </h1>
            <div className="categoryBoxfiler">
              <Link to="/addproduct-admin" className="box_add_product">
                <BiPlus id="icon_add_product" />
                <p>Add item</p>
              </Link>
            </div>
          </div>
          <div className="banner_no_box">
            <div className="banner_no_box_image">
              <div className="img">
                <img src={banner_no} alt="Banner" />
              </div>
            </div>
            <div className="edit_image_banner">
              <CiCamera id="box_icon_camera" />
            </div>
          </div>

          <div className="box_category">
            <div className="box_contact_category">
              <div className="img">
                <img src={imageicon} alt="img" />
              </div>
              <div className="ChooseImage_category">
                <CiCamera id="iconCamera_category" />
              </div>
              <div className="box_icon_MdOutlineEdit">
                <p>category.name</p>
                <div className="box_MdOutlineEdit">
                  <MdOutlineEdit id="icon_edit_MdOutlineEdit" />
                </div>
              </div>
            </div>
          </div>

          <div id="container_product_admin">
            <div className="productHead_content">
              <h1 className="htxthead">
                <span className="spennofStyle"></span>ALL Items
              </h1>
            </div>
            {/* <div className="contentImageProducts">
              <div className="box_product">
                <div className="box_input-img">
                  <div className="box_image">
                    <img src={imageicon} alt="Product" />
                    <input type="file" required />
                  </div>

                  <div className="Box_delete_product">
                    <AiOutlineDelete />
                  </div>

                  <div className="edit_image_product">
                    <CiCamera id="box_icon_camera_product" />
                  </div>
                </div>

                <div className="txtOFproduct">
                  <div
                    className="box_icon_MdOutlineEdit"
                  >
                    <li>ProductName:</li>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="product-area">
              <div className="box-product">
                <Link to="/edit/item">
                  <div className="img">
                    <img src={productImage} alt="image" />
                  </div>
                  <ul className="txtOFproduct2">
                    <li className="name">Name...</li>
                    <li className="price">Price...</li>
                  </ul>
                </Link>
              </div>
              <div className="box-product">
                <Link to="/edit/item">
                  <div className="img">
                    <img src={productImage} alt="image" />
                  </div>
                  <ul className="txtOFproduct2">
                    <li className="name">Name...</li>
                    <li className="price">Price...</li>
                  </ul>
                </Link>
              </div>
              <div className="box-product">
                <Link to="/edit/item">
                  <div className="img">
                    <img src={productImage} alt="image" />
                  </div>
                  <ul className="txtOFproduct2">
                    <li className="name">Name...</li>
                    <li className="price">Price...</li>
                  </ul>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Product_Admin;
