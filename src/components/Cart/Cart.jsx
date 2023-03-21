import React from 'react'
import "./Cart.css"
import { useContext } from "react";
import { cartContext } from "../../App";

function Cart() {

    let myCartStatus = useContext(cartContext);

    console.log(myCartStatus)

  return (
      <div className="cart-container" id="cart-container">
          <div className="your-cart-logo">
              <img src="https://parspng.com/wp-content/uploads/2022/12/cartpng.parspng.com-2.png" alt="" />
              <h2> Tu carrito </h2>  
          </div>
          

          {
              myCartStatus.map((item, index) => {
                  return <div className="cart-object" key={index}>
                      <section>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="" />
                          <div>
                              <p> <span> {item.name} </span> </p>
                              <p> Precio por unidad: {item.price * item.units} </p>
                              <p> Total: <span>{item.price} </span>  </p>
                              <p> Unidades: <span> {item.units} </span></p>
                          </div>
                      </section>
                      <button> Borrar del carrito</button>
                  </div>
              })
          }
        
          <button> Finalizar compra </button>
          
      </div>
  )
}

export default Cart