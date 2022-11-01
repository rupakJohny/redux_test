import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart";
import "./CartButtons.css";

const BeforeCart = () => {
  const dispath=useDispatch()
   return (
      <div className="before-cart">
         <button className="add-cart-button" onClick={()=>{dispath(addToCart())}}>
            Add to cart
         </button>
      </div>
   );
};

export default BeforeCart;