"use client";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
import Styles from "./styles.module.scss";
import cn from "classnames";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useIsLoggedIn } from "@/config/Hooks";
import { logOut } from "@/features/Auth/AuthSlice";
import { useDispatch } from "react-redux";

const Navigation = ({ data }) => {
  const [sidebar, setSidebar] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState({});
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const isLoggedIn = useIsLoggedIn();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleMobileSub = (index) => {
    setMobileSubMenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    // Sayfa yüklendiğinde ve sidebar açıkken, sayfa dışına tıklanırsa menüyü kapat
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  const handleLinkClick = (index) => {
    setSidebar(false);
  };
  return (
    <div className={Styles.navigation} ref={menuRef}>
      <div className={Styles.hamburger}>
        {sidebar ? (
          <AiIcons.AiOutlineClose onClick={showSidebar} />
        ) : (
          <FaIcons.FaBars onClick={showSidebar} />
        )}
      </div>
      <nav className={cn(sidebar ? Styles.active : Styles.mainNavigation)}>
        <ul className={cn(Styles.menu)}>
          {data?.dataNavigation?.map((item, index) => {
            const hasSubMenu = item.subMenu?.length > 0;
            return (
              <li
                key={index}
                onClick={() => toggleMobileSub(index)}
                className={cn(
                  Styles.menuList,
                  hasSubMenu && Styles.hasSubMenu,
                  mobileSubMenu[index] && hasSubMenu && Styles.mobileShow
                  // hasSubMenu && Styles.mobileShow
                )}
              >
                {hasSubMenu ? (
                  <div className={cn(Styles.menuItem)}>
                    {item?.text}
                    <AiOutlineDown />
                  </div>
                ) : (
                  <Link
                    onClick={() => handleLinkClick(index)}
                    href={item?.href}
                  >
                    {item?.text}
                  </Link>
                )}

                {hasSubMenu ? (
                  <ul className={Styles.subMenuList}>
                    <div>
                      {item?.subMenu.map((item) => {
                        return (
                          <li>
                            <Link
                              onClick={() => handleLinkClick(index)}
                              href={item?.href}
                            >
                              {item?.text}
                              <AiOutlineDown className={Styles.rightArrow} />
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
        {isLoggedIn ? (
          <button className={Styles.out} onClick={handleLogOut}>
            Çıkış Yap
          </button>
        ) : (
          <Link className={Styles.in} href="giris-yap">
            Giriş Yap
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
