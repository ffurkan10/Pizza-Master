import React from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";
import * as Aicons from "react-icons/ai";
import cn from "classnames";

const Banner = ({ who, image, title, text, bilgi, isCampaign, logo }) => {
  return (
    <div
      className={cn(
        Styles.banner,
        isCampaign && Styles.campaignBanner,
        who && Styles.whoBanner
      )}
    >
      <Image
        className={Styles.imageBox}
        src={image}
        width={1400}
        height={400}
        alt="banner"
      />
      <div className={Styles.bannerText}>
        {logo && <Image width={80} height={80} src={logo} />}
        <h1>{title}</h1>
        <p>{text}</p>
        {bilgi && (
          <div className={Styles.bilgi}>
            <span>{bilgi}</span>
            <Aicons.AiOutlineArrowDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
