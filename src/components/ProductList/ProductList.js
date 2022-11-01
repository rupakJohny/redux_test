import React from "react";
import { useDispatch, useSelector } from "react-redux";
import products from "../../api/products.json";
import AfterCart from "./CartButtons/AfterCart";
import BeforeCart from "./CartButtons/BeforeCart";
import "./ProductList.css";
//import CartButtons from "./CartButtons";

const ProductList = () => {
   const { cartCount } = useSelector((state) => state.cart)
   return (
      <section className="container">
         {products?.map((product, key) => (
            <div className="product-container" key={key}>
               <img src={product?.image} alt="" />
               <h3>{product?.title}</h3>
               {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
            </div>
         ))}
      </section>
   );
};

export default ProductList;