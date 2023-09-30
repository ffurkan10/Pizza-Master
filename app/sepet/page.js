"use client";
import { addToCart, decreaseCart, remove } from "@/features/CartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

const Sepet = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (cartProduct) => {
    dispatch(remove(cartProduct));
  };

  const handleIncrease = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  const handleDecrease = (cartProduct) => {
    dispatch(decreaseCart(cartProduct));
  };

  return (
    <div className="container">
      <div className={Styles.cartHeader}>
        <h2>Sepetiniz</h2>{" "}
        <span>
          {" "}
          ( {cart?.cartItems?.length === 0 ? "0" : cart?.cartItems?.length}
        </span>
        <span>Ürün )</span>
      </div>

      {cart?.cartItems?.length === 0 && (
        <div className={Styles.empty}>
          <div className={Styles.emptyCard}>
            <h2>Sepetiniz Boş!</h2>
            <p>Seçim Yapmak İçin</p>
            <Link href="/urunler">
              <button>Ürünler Sayfasına Git</button>
            </Link>
          </div>
        </div>
      )}

      <ul className={Styles.cartItems}>
        {cart.cartItems.map((item) => (
          <li className={Styles.cartList}>
            <div className={Styles.left}>
              <div className={Styles.imageBox}>
                <img src={item?.image_url} />
              </div>
            </div>
            <div className={Styles.right}>
              <h4>{item?.title}</h4>
              <div className={Styles.quantity}>
                <button onClick={() => handleIncrease(item)}>+</button>
                <p>{item?.cartQuantity}</p>
                <button onClick={() => handleDecrease(item)}>-</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sepet;
