import React from "react";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

const CampaignCard = ({ title, data }) => {
  return (
    <div className="container">
      <div className={cn(Styles.campaign)}>
        {title && (
          <div className={Styles.title}>
            <h3>{title}</h3>
          </div>
        )}

        <ul className={Styles.campaignList}>
          {data?.map((urun) => (
            <li className={Styles.campaignCard}>
              <div className={Styles.image}>
                <img src={urun?.image} />
              </div>
              <div className={Styles.text}>
                <h5>{urun?.title}</h5>
                <p>{urun?.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CampaignCard;
