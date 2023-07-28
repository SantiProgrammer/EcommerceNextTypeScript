"use client";

import { useEffect, useState } from "react";
import Products from "./components/products";

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const product = await response.json();
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

const Home = () => {
  const [products, setProducts] = useState<{ products: any }>();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="div-animation">
        <section>
          <div className="home-container">
            <div className="home-row">
              <h1>Home</h1>
              <img
                className="home-image"
                src="https://i.ibb.co/xMVc7Z0/pngegg.png"
                alt="img"
              />
              <p>e-Commerce Campo Grande</p>
            </div>
            <div className="home-row">
              {products ? (
                <Products products={products.slice(4, 8)} />
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
