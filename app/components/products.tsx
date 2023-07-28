"use client";
import { useRouter } from "next/navigation";

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

const Products: React.FC<{ products: Product[] }> = ({ products }) => {
  const router = useRouter();

  return (
    <>
      <div className="product-container">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => {
              router.push(`/product/${product.id}`);
            }}
          >
            <p className="product-title">{product.title} </p>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-info">
              <p className="price">$ {product.price}</p>
              <p className="freeShipping">
                {" "}
                Free Shiping
                <img
                  className="ray-geen"
                  src="https://icones.pro/wp-content/uploads/2022/07/icones-d-eclair-verte.png"
                  alt=""
                />{" "}
                <span>FAST</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
