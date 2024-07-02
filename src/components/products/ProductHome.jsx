import "./productHome.css";
import productImage from "../../img/productImage.png";
import { Link } from "react-router-dom";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { FaMagnifyingGlass, FaCartShopping, FaRegUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import logo_resoure2 from "../../img/logo_resoure2.jpeg";

const ProductHome = () => {
  const products = [
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "product 2", price: 100 },
    { id: 3, name: "product 3", price: 100 },
    { id: 4, name: "product 4", price: 100 },
  ];
  return (
    <div>
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
                    placeholder="Search..."
                  ></input>
                </div>
              </form>

              <div className="right_ofHeadBox">
                <div className="userAndstore">
                  <Link to="/more">
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

      <div className="product">
        <div className="productHead_content">
          <h1 className="htxthead">
            <span className="spennofStyle"></span>Items
          </h1>
        </div>

        <div className="product-area">
          {products.map((product, index) => (
            <div className="box-product" key={index}>
              <Link to="/goods">
                <div className="img">
                  <img src={productImage} alt="image" />
                </div>
                <ul className="txtOFproduct2">
                  <li className="name">Name: {product.name}</li>
                  <li className="price">Price: ${product.price}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>
        <br />

        {/* Render pagination */}
        <div className="pagination" style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              background: "#FF4F16",
              color: "white",
            }}
          >
            Previous
          </button>
          <button
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              fontSize: "16px",
              cursor: "pointer",
              color: "white",
              borderRadius: "3px",
              backgroundColor: "#007bff",
            }}
          >
            1
          </button>
          <button
            style={{
              padding: "10px 20px",
              margin: "0 5px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              background: "#FF4F16",
              color: "white",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
