import React from "react";
import Styles from "./styles.module.scss";
import cn from "classnames";

const WhyUs = ({ data, title }) => {
  return (
    <div className="container">
      <h3 className={Styles.topTitle}>{title}</h3>
      <ul className={Styles.card}>
        {data?.map((item) => (
          <li className={Styles.cardList}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyUs;
