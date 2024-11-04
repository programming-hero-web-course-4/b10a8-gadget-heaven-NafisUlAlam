import { useEffect, useState } from "react";
import { getStorage } from "../utils";
import Nothing from "./Nothing";
import CartItem from "./CartItem";

const CartItems = () => {
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
  return (
    <div>
      <div className="flex justify-between gap-4 my-8 items-center">
        <h2 className="mr-auto font-bold">Cart</h2>
        <p className="font-bold">Total Cost : {price}</p>
        <button className="btn btn-outline" onClick={() => handleSort()}>
          Sort By Price
        </button>
        <button className="btn btn-outline">Purchase</button>
      </div>
      <div>
        {arr.length ? (
          arr.map((item, index) => (
            <CartItem key={index} cartItem={item}>
              {item.product_id}
            </CartItem>
          ))
        ) : (
          <Nothing></Nothing>
        )}
      </div>
    </div>
  );
};

export default CartItems;
