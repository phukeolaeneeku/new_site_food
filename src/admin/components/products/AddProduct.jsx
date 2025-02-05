import React, {useState} from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./addProduct.css";
import imageicon from "../../../img/imageicon.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";
import {
  HiOutlineShoppingBag as HiMiniShoppingBag,
  HiPlus,
} from "react-icons/hi";

const AddProduct = () => {
  const [items, setItems] = useState([
    {
      name: "",
      price: "",
      description: "",
      images: [],
      imagePreview: "",
    },
  ]);

  const handleAdd = () => {
    setItems([
      ...items,
      {
        name: "",
        price: "",
        description: "",
        images: [],
        imagePreview: "",
      },
    ]);
  };
  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <div className="Box_btn_haed">
            <h2>Add Item</h2>
            <button type="submit" className="btn_submit">
              Post item
            </button>
           
          </div>

          <div>
            <div className="group_container_product">
              <div className="addProduct_box_content_afterThat">
                <div className="deleteBox_productconotent">
                  <AiOutlineDelete />
                </div>
                <div className="box_input-img">
                  <img src={imageicon} alt="default" />
                  <input type="file" required />
                </div>
                <div className="edit_images">
                  <label className="trigger_popup_fricc">
                    <CiCamera id="icon_ci_camera" />
                  </label>
                </div>
                <div className="box_container_image">
                  <div className="input-box">
                    <div className="box">
                      <input type="text" placeholder="Item name" required />
                    </div>
                    <div className="box">
                      <input type="text" placeholder="Item price" required />
                    </div>

                    <div className="box">
                      <input type="text" placeholder="Description" required />
                    </div>
                  </div>
                </div>
              </div>

              <div onClick={handleAdd}>
                <div className="iconimage">
                  <HiMiniShoppingBag id="icon_shoppingbag" />
                  <HiPlus id="icon_goplus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
