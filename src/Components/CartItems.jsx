import { useEffect, useState } from "react";
import { delStorage, getStorage } from "../utils";
import Nothing from "./Nothing";
import CartItem from "./CartItem";
import Modal from "./Modal";
import { useOutletContext } from "react-router-dom";

const CartItems = () => {
  const { setCart } = useOutletContext();
  //console.log(setCart);

  const cart = getStorage("c");
  //console.log(cart);

  const [price, setPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (let item of cart) total += item.price;
    total = total.toFixed(2);
    setPrice(total);
  }, [cart]);

  const [arr, setArr] = useState(cart);

  const handleSort = () => {
    const newArr = [...cart].sort((a, b) => b.price - a.price);
    setArr(newArr);
  };
  //console.log(arr, cart);

  const [isDisabled, setIsDisabled] = useState(false);
  useEffect(() => {
    if (arr.length === 0) setIsDisabled(true);
    else setIsDisabled(false);
  }, [arr.length]);

  const handlePurchase = () => {
    //console.log("button clicked");
    document.getElementById("my_modal_5").showModal();
    delStorage("c");
    const cart = getStorage("c");
    setArr(cart);
    setPrice(0);
    setIsDisabled(true);
    setCart([]);
  };
  return (
    <div>
      <Modal></Modal>
      <div className="flex justify-between gap-4 my-8 items-center">
        <h2 className="mr-auto font-bold text-base md:text-xl lg:text-3xl">
          Cart
        </h2>
        <p className="font-bold">Total Cost : {price}</p>
        <button
          className="btn btn-outline hover:bg-[#731fb8]"
          onClick={() => handleSort()}
        >
          Sort By Price
        </button>
        <button
          disabled={isDisabled}
          className="btn btn-outline hover:bg-[#731fb8]"
          onClick={() => {
            handlePurchase();
          }}
        >
          Purchase
        </button>
      </div>
      <div>
        {arr.length ? (
          arr.map((item, index) => (
            <CartItem key={index} cartItem={item}>
              {item.product_id}
            </CartItem>
          ))
        ) : (
          <Nothing title={"cart"}></Nothing>
        )}
      </div>
    </div>
  );
};

export default CartItems;
