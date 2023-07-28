"use client";

import { useGlobalContext } from "@/app/context/store";
import ItemCount from "@/app/components/itemCount";
import Swal from "sweetalert2";

const ProductDetails = async ({ params }) => {
  const { data, addProduct } = useGlobalContext();

  const getUser = async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  };
  const product = await getUser(params.id);

  const onAdd = (qty: any) => {
    Swal.fire({
      icon: "success",
      title: `  Added to cart!`,
      text: `${qty} ${product.title}`,
    });
    addProduct(product.title, qty, product.image, product.id, product.price);
  };

  return (
    <>
      <div className="div-animation">
        <section>
          <div className="details-container">
            <h2>Product Details of {product.title}</h2>
            <div className="detail-card">
              <div className="detail-row">
                <img className="detail-img" src={product.image} alt="" />
              </div>
              <div className="detail-row">
                <p>
                  {product.title} {product.description}
                </p>
                <p>$ {product.price}</p>
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
                {<ItemCount stock={10} initial={1} onAdd={onAdd} />}
                {/* {1 === "1" ? (
                  <Link className="check-out" href="/cart">
                  Terminar compra
                  </Link>
                  ) : (
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                  )} */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
