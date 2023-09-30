import React from "react";
import Styles from "./styles.module.scss";
import * as Bscons from "react-icons/bs";
import cn from "classnames";
import Link from "next/link";

const ContactCard = ({ data, href, icon }) => {
  return (
    <div className={Styles.contact}>
      <div className={Styles.imageBox}>{icon}</div>
      <div className={Styles.textLine}>
        <p>{data.title}</p>
        <Link href={href}>{data?.text}</Link>
      </div>
    </div>
  );
};

export default ContactCard;
