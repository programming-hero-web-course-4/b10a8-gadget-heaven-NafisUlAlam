import PropTypes from "prop-types";

const WishItem = ({ wishItem }) => {
  const { product_image, product_title, price, description } = wishItem;
  return (
    <div className="border-2 rounded-lg mb-4 p-4">
      <div className="flex items-center gap-4">
        <div className="w-1/3">
          <img src={product_image} alt="" className="h-40 object-cover" />
        </div>
        <div className="lg:space-y-4">
          <h2 className="font-bold">{product_title}</h2>
          <p>{description}</p>
          <p className="font-bold">Price: ${price}</p>
          <button className="btn bg-purple-700 text-white font-bold py-6 px-2 rounded-full h-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
WishItem.propTypes = {
  wishItem: PropTypes.object,
};

export default WishItem;
