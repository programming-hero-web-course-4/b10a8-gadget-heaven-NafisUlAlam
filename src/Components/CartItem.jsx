import PropTypes from "prop-types";

const CartItem = ({ cartItem }) => {
  //console.log(cartItem);
  const { product_image, product_title, price, description } = cartItem;
  return (
    <div className="border-2 rounded-lg mb-4 p-4">
      <div className="flex items-center gap-4">
        <div className="w-1/3">
          <img src={product_image} alt="" className="h-40 object-cover" />
        </div>
        <div>
          <h2 className="font-bold">{product_title}</h2>
          <p>{description}</p>
          <p className="font-bold">Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
};

export default CartItem;
