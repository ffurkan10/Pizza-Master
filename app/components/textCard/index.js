import React from "react";
import Styles from "./styles.module.scss";

const TextCard = ({ data, dataTitle }) => {
  return (
    <div className="container">
      <div className={Styles.numbers}>
        <div className={Styles.numbersTitle}>
          <h3>{dataTitle}</h3>
        </div>

        <ul className={Styles.numberList}>
          {data?.map((number) => (
            <li className={Styles.numberCard}>
              <p>{number?.title}</p>
              <span>{number?.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextCard;
