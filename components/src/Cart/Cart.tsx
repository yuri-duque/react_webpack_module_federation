import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <CartItem quantity={10} add={() => {}} remove={() => {}} />
      <CartItem quantity={5} add={() => {}} remove={() => {}} />
    </div>
  );
};

export default Cart;
