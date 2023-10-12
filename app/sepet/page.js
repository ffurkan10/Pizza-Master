"use client";
import { addToCart, decreaseCart, remove } from "@/features/CartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

const Sepet = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [checkInput, setCheckInput] = useState("");
  const [lastCoupon, setLastCoupon] = useState("");

  const handleInputChange = (event) => {
    setCheckInput(event.target.value);
  };

  const handleRemove = (cartProduct) => {
    dispatch(remove(cartProduct));
  };

  const handleIncrease = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  const handleDecrease = (cartProduct) => {
    dispatch(decreaseCart(cartProduct));
  };

  const checkCoupon = () => {
    if (sessionStorage.getItem("lastGeneratedCoupon")) {
      const lastGeneratedCoupon = sessionStorage.getItem("lastGeneratedCoupon");
      if (lastGeneratedCoupon) {
        if (checkInput === lastGeneratedCoupon) {
          setLastCoupon("İndirim kuponunuzu kullanabilirsiniz.");
        } else {
          setLastCoupon("Yanlış kupon kodu girdiniz.");
        }
      } else {
        setLastCoupon("Hesabınıza kayıtlı bir kod bulunmuyor.");
      }
    } else {
      setLastCoupon("Hesabınıza kayıtlı bir kod bulunmuyor.");
    }
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

      {/* {cart?.cartItems?.length === 0 ? (
        ""
      ) : (
        <div className={Styles.discount}>
          <h4>İndirim Kodu:</h4>
          <input type="text" />
          <button>Sorgula</button>
        </div>
      )} */}
      <div className={Styles.discount}>
        <div className={Styles.check}>
          <h4>İndirim Kodu:</h4>
          <input value={checkInput} onChange={handleInputChange} type="text" />
          <button onClick={checkCoupon}>Sorgula</button>
        </div>
        <span
          className={
            lastCoupon === "İndirim kuponunuzu kullanabilirsiniz."
              ? Styles.green
              : Styles.red
          }
        >
          {lastCoupon}
        </span>
      </div>
    </div>
  );
};

export default Sepet;
