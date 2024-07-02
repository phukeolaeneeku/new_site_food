import "./homePage.css";
import Menu from "../menuFooter/Menu";
import Banner from "../header/Banner";
import ProductHome from "../products/ProductHome";
import Categories from "./Categories";

const HomePage = () => {

  return (
    <div>
      <Banner />
      <Categories />
      <ProductHome />
      <Menu />
    </div>
  );
};

export default HomePage;
