import Banner from "./../Components/Banner";
import BannerImg from "./../Components/BannerImg";
import Sidebar from "./../Components/Sidebar";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative">
      <Banner></Banner>
      <BannerImg></BannerImg>
      {/* sidebar */}
      {/* outlet */}
      <div className=" mt-12">
        <h2 className="font-bold text-base md:text-2xl lg:text-4xl mb-6 lg:mb-12 text-center">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex">
          <div className="w-1/4">
            <Sidebar></Sidebar>
          </div>
          <div className="w-3/4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
