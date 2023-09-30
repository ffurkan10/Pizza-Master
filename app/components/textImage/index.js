import Image from "next/image";
import React from "react";
import Styles from "./styles.module.scss";
import cn from "classnames";

const TextImage = ({ title, text, image }) => {
  return (
    <div className="container">
      <div className={Styles.textImage}>
        <Image src={image} width={550} height={400} />
        <div className={Styles.text}>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
