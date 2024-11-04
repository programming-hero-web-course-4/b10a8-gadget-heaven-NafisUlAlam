import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Nothing from "./Nothing";

const Products = () => {
  const data = useLoaderData();
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId && categoryId !== "All Products") {
      const filteredProds = [...data].filter(
        (product) => product.category === categoryId
      );
      setProducts(filteredProds);
    } else {
      setProducts(data);
    }
    //    console.log(filteredProds, data);
  }, [categoryId, data]);

  //console.log(products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
      {products.length ? (
        products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))
      ) : (
        <Nothing></Nothing>
      )}
    </div>
  );
};

export default Products;
