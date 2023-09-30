import React from "react";
import layoutData from "@/locales/layout/navigation.json";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Navigation from "../navigation";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className={cn("container", Styles.header)}>
      <Link href="/">
        <Image width={80} height={80} src={logo} />
      </Link>
      <Navigation data={layoutData} />
    </div>
  );
};

export default Header;
