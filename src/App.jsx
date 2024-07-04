import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

//------ Login-SignUp Page ------//
import LoginUser from "./components/loginAndSignup/LoginUser";
import RegisterUser from "./components/loginAndSignup/RegisterUser";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Signup1 from "./components/loginAndSignup/Signup1";
import Signup2 from "./components/loginAndSignup/Signup2";
import ChangeSeller from "./components/loginAndSignup/ChangeSeller";
import AdditionalSeller from "./components/loginAndSignup/AdditionalSeller"


//------ Home Page ------//
import Home from "./components/homePage/HomePage";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/cart/Cart";
import Order from "./components/order/Order";
import Bill from "./components/order/Bill";
import Categories from "./components/homePage/Categories";
import ReviewProduct from "./components/order/ReviewProduct"
import ProfileEdit from "./components/profile/ProfileEdit";
import Accuont from "./components/profile/Accuont";
import Payment from "./components/cart/Payment";



import Contact from "./components/contact/Contact"

//------ Seller ------//
import Stores from "./components/seller/stores/Store";
import Store_management from "./components/seller/store_management/Store_management";
import AddProduct from "./components/seller/addProduct/AddProduct";
import EditProduct from "./components/seller/editProduct/EditProduct";
import ReviewStore from "./components/seller/reviewStore/ReviewStore";
import Dashboard_seller from "./components/seller/stores/Dashboard_seller";
import PendingOrder from "./components/seller/orderStore/PendingOrder";
import ProcessingOrder from "./components/seller/orderStore/ProcessingOrder";
import ShippedOrder from "./components/seller/orderStore/ShippedOrder";
import DeliveredOrder from "./components/seller/orderStore/DeliveredOrder";
import BillStore from "./components/seller/orderStore/BillStore";

//------ Admin ------//
import Dashboard from "./admin/Dashboard";
import Product_admin from "./admin/components/products/Product_Admin";
import Addproduct_admin from "./admin/components/products/AddProduct";
import EditItem from "./admin/components/products/EditItem";
import AddCategory from "./admin/components/categoryMenagement/AddCategory";
import EditCategory from "./admin/components/categoryMenagement/EditCategory"
import Users from "./admin/components/menagerUser/Users";
import User_details from "./admin/components/menagerUser/User_details";
import Admins from "./admin/components/adminManagement/Admins";
import Add_Admin from "./admin/components/adminManagement/AddAdmin";
import EditAdmin from "./admin/components/adminManagement/EditAdmin";
import Account_Admin from "./admin/components/accountAdmin/AccountAdmin";
import OrderPending from "./admin/components/orderPage/OrderPending";
import OrderProcess from "./admin/components/orderPage/OrderProcess";
import OrderShipped from "./admin/components/orderPage/OrderShipped";
import OrderDelivered from "./admin/components/orderPage/OrderDelivered";
import OrderBill_Admin from "./admin/components/orderPage/OrderBill";
import Employee from "./admin/components/employeeManagement/Employee";
import AddEmployee from "./admin/components/employeeManagement/AddEmployee";
import EditEmployee from "./admin/components/employeeManagement/EditEmployee";
import AccountAdmin from "./admin/components/accountAdmin/AccountAdmin";
// import { CartProvider } from "./components/cart/CartContext";



function App() {
  return (
    // <CartProvider>
      <Router>
        <Routes>
          {/* --------- Login-Signup page---------- */}
          <Route path="/login" Component={LoginUser} />
          <Route path="/registeruser" Component={RegisterUser} />
          <Route path="/forgotpassword" Component={ForgotPassword} />
          <Route path="/signup1" Component={Signup1} />
          <Route path="/signup" Component={Signup1} />
          <Route path="/signup2" Component={Signup2} />
          <Route path="/change-seller" Component={ChangeSeller} />
          <Route path="/additional-seller" Component={AdditionalSeller} />     

          {/* --------- Home Page ---------- */}
          <Route path="/" exact Component={Home} />
          <Route path="/goods" Component={ProductDetails} />
          <Route path="/cart" Component={Cart} />
          <Route path="/review-product" Component={ReviewProduct} />
          <Route path="/profileedit" Component={ProfileEdit} />
          <Route path="/accuont" Component={Accuont} />
          <Route path="/contact" Component={Contact} />
          <Route path="/categories" Component={Categories} />
          <Route path="/payment" Component={Payment} />
          <Route path="/order" Component={Order} />
          <Route path="/bill" Component={Bill} />

          {/* --------- Seller ---------- */}
          <Route path="/stores" Component={Stores} />
          <Route path="/store-management" Component={Store_management} />
          <Route path="/add-product" Component={AddProduct} />
          <Route path="/edit-product/:product_id" Component={EditProduct} />
          <Route path="/eview-store" Component={ReviewStore} />
          <Route path="/dashboard-seller" Component={Dashboard_seller} />
          <Route path="/order-pending" Component={PendingOrder} />
          <Route path="/order-processing" Component={ProcessingOrder} />
          <Route path="/order-shipped" Component={ShippedOrder} />
          <Route path="/order-delivered" Component={DeliveredOrder} />
          <Route path="/bill-store/:id" Component={BillStore} />

          {/* --------- Admin ---------- */}
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/product-admin" Component={Product_admin} />
          <Route path="/addproduct-admin" Component={Addproduct_admin} />
          <Route path="/edit-item" Component={EditItem} />
          <Route path="/add-category" Component={AddCategory} />
          <Route path="/edit-eategory" Component={EditCategory} />
          <Route path="/orderbill-admin" Component={OrderBill_Admin} />
          <Route path="/users" Component={Users} />
          <Route path="/user-details" Component={User_details} />
          <Route path="/admins" Component={Admins} />
          <Route path="/add-admin" Component={Add_Admin} />
          <Route path="/edit-admin" Component={EditAdmin} />
          <Route path="/order/pending" Component={OrderPending} />
          <Route path="/order/processing" Component={OrderProcess} />
          <Route path="/order/shipped" Component={OrderShipped} />
          <Route path="/order/delivered" Component={OrderDelivered} />
          <Route path="/employee" Component={Employee} />
          <Route path="/add-employee" Component={AddEmployee} />
          <Route path="/edit-employee" Component={EditEmployee} />


          <Route path="/account-admin" Component={Account_Admin} />
          <Route path="/edit-account" Component={AccountAdmin} />
          
          
        </Routes>
      </Router>
    // </CartProvider>
  );
}
export default App;
