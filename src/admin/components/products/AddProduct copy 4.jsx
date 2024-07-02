import React, {useState} from "react";
import AdminMenu from "../adminMenu/AdminMenu";
import "./addProduct.css";
import { AiOutlineDelete } from "react-icons/ai";
import banner_no from "../../../img/banner_no.jpg";
import imageicon from "../../../img/imageicon.jpg";

const AddProduct = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <AdminMenu />
      <section id="post">
        <div className="box_container_product">
          <h2>Add Item</h2>
          <form className="edit-product-forms">
            <div className="input-img">
              <div className="box_description">
                <h2>Image</h2>
                <div className="images">
                  {imageSrc ? (
                    <img src={imageSrc} alt="Selected" />
                  ) : (
                    <img src={imageicon} alt="Placeholder" />
                  )}
                  <div
                    className="box_chooses_image"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    Choose image
                  </div>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="gallery">
                <h3>View More Images</h3>
                <div className="gallery-box">
                  <div className="gallery-box-view">
                    <img src={banner_no} alt="Preview" />
                    <div className="button">
                      <AiOutlineDelete />
                    </div>
                  </div>
                  <div
                    className="add-more"
                    onClick={() =>
                      document.getElementById("fileInputMultiple").click()
                    }
                  >
                    +
                  </div>
                  <input
                    type="file"
                    id="fileInputMultiple"
                    style={{ display: "none" }}
                    multiple
                  />
                </div>
              </div>
            </div>

            <div className="form_input_box">
              <div className="input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name..." required />
              </div>
              <div className="input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price..."
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  rows="10"
                  placeholder="Description..."
                  required
                ></textarea>
              </div>
            </div>
            <div className="submit1">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
