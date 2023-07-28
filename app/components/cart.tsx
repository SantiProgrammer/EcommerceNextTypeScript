"use client";

import { useGlobalContext } from "../context/store";
import Swal from "sweetalert2";
import { useEffect } from "react";

function Cart() {
  const { clearCart, data, deleteProduct } = useGlobalContext();

  useEffect(() => {
    data;
  }, []);

  /*  const onAdd = (qty: any) => {
    Swal.fire({
      icon: "success",
      title: `Producto de prueba Cantidad:${qty}`,
    });
    addProduct("Producto de prueba", qty);
  }; */

  const emptyCart = () => {
    Swal.fire({
      icon: "success",
      title: "Cart is empty now",
    });
    clearCart();
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

  const handleDeleteProduct = (productId: number) => {
    deleteProduct(productId);
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-end my-canvas"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
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
                        <p className="card-title">${e.item} </p>
                        <p className="card-text">Cant: ${e.qty}</p>
                        <p className="card-text">Total: $ ${e.id}</p>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex">
                      <button onClick={() => handleDeleteProduct(e.id)}>
                        Eliminar
                      </button>
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
      </div>
    </>
  );
}

export default Cart;
