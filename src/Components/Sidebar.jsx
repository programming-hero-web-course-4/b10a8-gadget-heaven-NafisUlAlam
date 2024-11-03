import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Sidebar = () => {
  const categeories = useLoaderData();
  //console.log(categeories);
  return (
    <div className="flex flex-col gap-4">
      {categeories.map((category) => (
        <NavLink key={category.id} to={`/category/${category.name}`}>
          <button className="btn px-4 py-2 rounded-full">
            {category.name}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
