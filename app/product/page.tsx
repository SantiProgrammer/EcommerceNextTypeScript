"use client";

import { useEffect, useState } from "react";
import Products from "../components/products";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const product = await response.json();
  /*  console.log("🚀 ~ product:", product); */
  return product;
};

interface Product {
  id: number;
  title: string;
  price: number;
  description: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductList = () => {
  const [products, setProducts] = useState<{ products: Product[] }>();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="div-animation">
        <h2>Season products</h2>
        {products ? <Products products={products} /> : <p>Loading...</p>}
      </section>
    </>
  );
};

export default ProductList;
