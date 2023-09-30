import React from "react";
import Link from "next/link";
import * as AiIcons from "react-icons/ai";
import Styles from "./styles.module.scss";
import cn from "classnames";
export default function Breadcrumb({ data }) {
  return (
    <div className="container" ar1ia-label="breadcrumb">
      <div className={Styles.Breadcrumb}>
        <section className={Styles.breadcrumbList}>
          {data?.map((item, index) => {
            if (item.link !== "") {
              return (
                <>
                  <Link prefetch={false} key={index} href={item.link}>
                    {item.text}
                  </Link>
                  <AiIcons.AiOutlineRight />
                </>
              );
            } else {
              return (
                <b>
                  <div
                    key={item.text}
                    className={cn(Styles.item, Styles.active)}
                  >
                    {item.text}
                  </div>
                </b>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
}
