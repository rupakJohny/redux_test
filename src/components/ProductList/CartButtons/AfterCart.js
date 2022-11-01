import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../../redux/cart";
import { increment } from "../../../redux/cart";
import "./CartButtons.css";

const AfterCart = () => {
   const { cartCount } = useSelector((state) => state.cart)
   const dispath=useDispatch()
   return (
      <div className="after-cart">
         <button className="cart-counter-button" onClick={()=>{dispath(decrement())}}>
            -
         </button>
         <div className="cart-count">{cartCount}</div>
         <button className="cart-counter-button" onClick={()=>{dispath(increment())}}>
            +
         </button>
      </div>
   );
};

export default AfterCart;