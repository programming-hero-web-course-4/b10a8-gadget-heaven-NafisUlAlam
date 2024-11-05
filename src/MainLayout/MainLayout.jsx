import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { addToStorage, getStorage } from "../utils";
const MainLayout = () => {
  // setting cart and wishlist from localstorage
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  useEffect(() => {
    const cartArr = getStorage("c");
    const wishArr = getStorage("w");
    setCart(cartArr);
    setWish(wishArr);
  }, []);
  const handleAdd = (str, p) => {
    addToStorage(str, p);
    const localStorage = getStorage(str);
    if (str === "c") setCart(localStorage);
    if (str === "w") {
      setWish(localStorage);
    }
  };

  return (
    <div className="container mx-auto w-11/12">
      <ToastContainer />
      <Navbar cart={cart} wish={wish}></Navbar>

      <div className="min-h-screen">
        <Outlet context={{ handleAdd, setCart }}></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
