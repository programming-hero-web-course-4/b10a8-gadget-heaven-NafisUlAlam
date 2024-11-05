import PropTypes from "prop-types";

const WishItem = ({ wishItem }) => {
  const { product_image, product_title, price, description } = wishItem;
  return (
    <div className="border-2 rounded-lg mb-4 p-4">
      <div className="md:flex items-center gap-4">
        <div className="md:w-1/3 mb-4">
          <img src={product_image} alt="" className="md:h-40 object-cover" />
        </div>
        <div className="space-y-4">
          <h2 className="font-bold text-center md:text-left">
            {product_title}
          </h2>
          <p>{description}</p>
          <p className="font-bold text-center md:text-left">Price: ${price}</p>
          <div className="text-center md:text-left">
            <button className="btn bg-purple-700 text-white font-bold py-3 px-5 rounded-full h-auto min-h-0">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
WishItem.propTypes = {
  wishItem: PropTypes.object,
};

export default WishItem;
