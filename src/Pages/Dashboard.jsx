import React from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-[#9538E2] pb-4 lg:pt-12">
        <h2 className="text-center text-white font-bold text-lg md:text-xl lg:text-3xl mb-4">
          Dashboard
        </h2>
        <p className="text-center text-white font-normal text-xs md:text-base lg:px-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="lg:mt-20 flex justify-center gap-4">
          <NavLink to="cart">
            <button className="px-10 py-2 font-bold rounded-full bg-slate-400 hover:bg-white">
              Cart
            </button>
          </NavLink>
          <NavLink to="wishlist">
            <button className="px-10 py-2 font-bold rounded-full bg-slate-400 hover:bg-white">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
