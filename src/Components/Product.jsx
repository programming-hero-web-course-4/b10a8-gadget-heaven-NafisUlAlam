import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { product_image, product_title, price } = product || {};
  return (
    <div className="card shadow-xl">
      <figure className=" h-[300px] p-4 bg-slate-300 rounded-lg">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>${price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
