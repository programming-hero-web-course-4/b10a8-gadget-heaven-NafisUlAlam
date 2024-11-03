import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto w-11/12">
      <Navbar></Navbar>

      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
