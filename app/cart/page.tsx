"use client";
import Swal from "sweetalert2";
import { useGlobalContext } from "../context/store";

const Cart = () => {
  const { data, deleteProduct, clearCart } = useGlobalContext();

  const handleDeleteProduct = (productId: number) => {
    deleteProduct(productId);
  };

  const emptyCart = () => {
    if (data.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Nothing to delete",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Cart is empty now",
      });
      clearCart();
    }
  };
  const CheckOut = () => {
    if (data.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Add some product before checkout",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Your order has been created!!!",
      });
      clearCart();
    }
  };

  return (
    <section className="div-animation">
      <div className="offcanvas-body" id="carrito-wrapper">
        {data.length > 0
          ? data.map((e) => (
              <div key={e.item} className="card mb-4 ">
                <div className="row g-0 d-flex justify-content-center">
                  <div className="col-md-3 img-carrito">
                    <img
                      src={e.image}
                      className="img-fluid rounded-start"
                      alt={e.item}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-detalle">
                      <p className="card-title">${e.price} </p>
                      <p className="card-text">Cant: ${e.qty}</p>
                      <p className="card-text">Total:${e.price * e.qty}</p>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <button onClick={() => handleDeleteProduct(e.id)}>X</button>
                  </div>
                </div>
              </div>
            ))
          : "Cart is empty..."}
      </div>
      <p className="totalCarrito">
        Total Price: $<span id="totalPrecioCarrito">0</span>
      </p>
      <div className="botonCarrito">
        <button
          type="button"
          onClick={CheckOut}
          className="btn btn-primary pagar"
        >
          Checkout
        </button>
        <button
          type="button"
          onClick={emptyCart}
          className="btn btn-primary vaciar-carrito"
        >
          Empty Cart
        </button>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Open Modal Cart
      </button>
    </section>
  );
};

export default Cart;
