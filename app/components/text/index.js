import React from "react";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Banner from "../banner";

const TextComponent = ({ data, topTitle, image }) => {
  return (
    <div className="container">
      <div className={Styles.textComp}>
        <h1>{topTitle}</h1>
        <Banner who image={image} />
        {/* <div className={Styles.topTitle}>
          <h1>{topTitle}</h1>
        </div> */}

        <div className={Styles.desc}>
          <ul className={Styles.descList}>
            {data?.map((text, index) => (
              <li
                key={index}
                className={cn(
                  Styles.descParagh,
                  index % 2 === 0 ? Styles.grayBg : Styles.whiteBg
                )}
              >
                <h3>{text?.title}</h3>
                <p>{text?.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;
