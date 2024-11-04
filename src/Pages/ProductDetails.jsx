import { useLoaderData, useOutletContext, useParams } from "react-router-dom";
import Rating from "./../Components/Rating";
import { IoCart } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getStorage } from "../utils";

const ProductDetails = () => {
  const { productId } = useParams();
  const data = useLoaderData();

  const { handleAdd } = useOutletContext();

  const [prod, setProd] = useState({});
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    const p = data.find((product) => product.product_id === productId);
    setProd(p);
    const array = getStorage("w");
    const isExist = array.find(
      (product) => product.product_id === p.product_id
    );
    if (isExist) setIsWished(true);
  }, [data, productId]);
  // const p = data.find((product) => product.product_id === productId);

  const {
    product_title,
    product_image,
    price,
    description,
    availability,
    rating,
    specification,
  } = prod;

  //this is just for disabling the wishlist button once clicked
  const handleClick = () => {
    setIsWished(true);
  };
  return (
    <div>
      <div className="bg-[#9538E2] lg:pb-40 lg:pt-12">
        <h2 className="text-center text-white font-bold text-lg md:text-xl lg:text-3xl mb-4">
          Product Details
        </h2>
        <p className="text-center text-white font-normal text-xs md:text-base lg:px-20">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl gap-4 lg:w-[80%] mb-12">
        <figure className="w-1/2">
          <img src={product_image} alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
            {product_title}
          </h2>
          <h3 className="font-bold text-base md:text-lg lg:text-xl">
            Price : ${price}
          </h3>
          <h3 className={availability ? "text-green-500" : "text-red-500"}>
            {availability ? "In stock" : "Out of stock"}
          </h3>
          <h3>{description}</h3>
          <h3 className="font-bold text-base md:text-lg lg:text-xl">
            Specification:
          </h3>
          <ol>
            {specification &&
              specification.map((str, id) => (
                <li key={id} className="text-xs md:text-base text-[#09080F]/60">
                  {id + 1}. {str}
                </li>
              ))}
          </ol>

          <h3 className="font-bold text-base md:text-lg lg:text-xl">Rating </h3>
          <div className="flex gap-12 items-center">
            <div className="font-bold text-base md:text-lg lg:text-xl">
              <Rating rating={rating}></Rating>
            </div>
            <h2 className="font-bold text-base btn px-4 py-2">{rating}</h2>
          </div>

          <div className="flex items-center gap-12 mt-5">
            <button
              onClick={() => handleAdd("c", prod)}
              className="flex items-center gap-2 bg-[#9538E2] text-white px-4 py-2 rounded-full btn"
            >
              Add to cart <IoCart size={16} color="white" />
            </button>
            <button
              className="btn btn-outline"
              onClick={() => {
                handleAdd("w", prod);
                handleClick();
              }}
              disabled={isWished}
            >
              <FaHeart size={16} color="red" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
