import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { setCart } = useOutletContext();
  //console.log(setCart);
  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget BD</title>
      </Helmet>
      <div className="bg-[#9538E2] pb-4 lg:pt-12">
        <h2 className="text-center text-white font-bold text-lg md:text-xl lg:text-3xl mb-4">
          Dashboard
        </h2>
        <p className="text-center text-white font-normal text-xs md:text-base lg:px-10">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="lg:mt-20 flex justify-center gap-4">
          <NavLink
            to="cart"
            className={({ isActive }) =>
              isActive ? "bg-white rounded-full" : "text-white"
            }
          >
            <button className="px-10 py-2 font-bold rounded-full hover:bg-white hover:text-black">
              Cart
            </button>
          </NavLink>
          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              isActive ? "bg-white rounded-full" : "text-white"
            }
          >
            <button className="px-10 py-2 font-bold rounded-full hover:bg-white hover:text-black">
              Wishlist
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet context={{ setCart }}></Outlet>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
