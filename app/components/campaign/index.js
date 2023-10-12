"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "./styles.module.scss";
import Link from "next/link";
import { useIsLoggedIn } from "@/config/Hooks";
import generateRandomCoupon from "@/app/helpers/randomCupon";
import Modal from "@/app/elements/modal";
import * as BiIcons from "react-icons/bi";
import cn from "classnames";

const Campaign = () => {
  const isLoggedIn = useIsLoggedIn();
  const [coupon, setCoupon] = useState("");
  const [cuponModal, setCuponModal] = useState(false);
  const [alert, setAlert] = useState("");
  const [isCouponButtonDisabled, setIsCouponButtonDisabled] = useState(
    sessionStorage.getItem("isCouponButtonDisabled") === "true"
  );
  const [disabledText, setDisabledText] = useState("");

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      setAlert("Kupon kodu panoya kopyalandı.");
    } catch (err) {
      console.error("Kopyalama hatası:", err);
    }
  }

  const handleCopyClick = () => {
    copyToClipboard(coupon);
  };

  // const generateCoupon = () => {

  //   if (isCouponButtonDisabled) {
  //     setDisabledText(
  //       "(Hakkınızı doldurdunuz. 5 dakika sonra tekrar deneyiniz.)"
  //     );
  //     return;
  //   }

  //   if (!isCouponButtonDisabled) {
  //     const newCoupon = generateRandomCoupon();
  //     setCoupon(newCoupon);
  //     setCuponModal(true);
  //     setIsCouponButtonDisabled(true);
  //     sessionStorage.setItem("isCouponButtonDisabled", "true");

  //     setTimeout(() => {
  //       setIsCouponButtonDisabled(false);
  //       sessionStorage.setItem("isCouponButtonDisabled", "false");
  //     }, 300000);
  //   }
  // };

  const generateCoupon = () => {
    const isButtonDisabled =
      sessionStorage.getItem("isCouponButtonDisabled") === "true";

    if (isButtonDisabled) {
      setDisabledText(
        "(Hakkınızı doldurdunuz. 5 dakika sonra tekrar deneyiniz.)"
      );
      return;
    }

    const newCoupon = generateRandomCoupon();
    setCoupon(newCoupon);
    setCuponModal(true);
    setIsCouponButtonDisabled(true);

    sessionStorage.setItem("lastGeneratedCoupon", newCoupon);
    sessionStorage.setItem("isCouponButtonDisabled", "true");

    setTimeout(() => {
      setIsCouponButtonDisabled(false);
      sessionStorage.removeItem("lastGeneratedCoupon");
      sessionStorage.setItem("isCouponButtonDisabled", "false");
    }, 300000);
  };

  const toggleCupon = () => {
    setCuponModal((prevCuponModal) => !prevCuponModal);
    setAlert("");
  };

  return (
    <div className={cn("container", Styles.bannerBlock)}>
      {isLoggedIn ? (
        <div className={Styles.banner}>
          <h3>Sayısız Kampanyadan Yararlanma Fırsatını Kaçırma!</h3>
          <p>
            Kampanya ve indirimlerden yararlanmak için
            <span className={Styles.cupon} onClick={generateCoupon}>
              tıkla ve indirim kuponu kazan.
            </span>
          </p>
          <span className={Styles.disabled}>{disabledText}</span>
          <Modal
            isOpen={cuponModal}
            toggle={toggleCupon}
            className="loginPortalModal"
          >
            <h3 className={Styles.cuponHead}>
              Kupon Kodu: {coupon}
              <button className={Styles.copy} onClick={handleCopyClick}>
                <BiIcons.BiCopy />
              </button>
            </h3>
            <span className={Styles.alert}>{alert}</span>
          </Modal>
        </div>
      ) : (
        <div className={Styles.banner}>
          <h3>Sayısız Kampanyadan Yararlanma Fırsatını Kaçırma</h3>
          <p>
            Kampanya ve indirimlerden yararlanmak için
            <Link href="/giris-yap">giriş yap.</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Campaign;
