"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "./styles.module.scss";
import cn from "classnames";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/CartSlice";

const buttons = [
  {
    id: 1,
    name: "All Recipes",
  },
  {
    id: 2,
    name: "Simply Recipes",
  },
  {
    id: 3,
    name: "BBC Good Food",
  },
  {
    id: 4,
    name: "Closet Cooking",
  },
  {
    id: 5,
    name: "A Spicy Perspective",
  },
  {
    id: 6,
    name: "My Baking Addiction",
  },
  {
    id: 7,
    name: "What's Gaby Cooking",
  },
  {
    id: 8,
    name: "Epicurious",
  },
  {
    id: 9,
    name: "The Pioneer Woman",
  },
  {
    id: 10,
    name: "Bon Appetit",
  },
  {
    id: 11,
    name: "Chow",
  },
  {
    id: 12,
    name: "Lisa's Kitchen",
  },
  {
    id: 13,
    name: "Vintage Mixer",
  },
  {
    id: 14,
    name: "Real Simple",
  },
  {
    id: 15,
    name: "Two Peas and Their Pod",
  },
  {
    id: 16,
    name: "Jamie Oliver",
  },
];

const ProductCards = ({ isProduct, title, data, isHome }) => {
  const [selectedFilter, setSelectedFilter] = useState("All Recipes");
  const dispatch = useDispatch();

  const handleAdd = (list) => {
    dispatch(addToCart(list));
  };

  const handleButtonClick = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData = data.filter((item) => {
    if (selectedFilter === "All Recipes") {
      return true;
    } else {
      return item.publisher === selectedFilter;
    }
  });

  return (
    <div className="container">
      {isProduct && (
        <div className={Styles.buttons}>
          {buttons?.map((buton) => (
            <button
              key={buton.id}
              onClick={() => handleButtonClick(buton.name)}
              className={selectedFilter === buton.name ? Styles.active : ""}
            >
              {buton.name}
            </button>
          ))}
        </div>
      )}

      <div className={cn(Styles.product, isHome && Styles.homeCard)}>
        {title && (
          <div className={Styles.title}>
            <h3>{title}</h3>
            <Link href="/urunler">Tümünü Gör</Link>
          </div>
        )}

        <ul className={Styles.productList}>
          {filteredData?.map((urun) => (
            <li className={Styles.productCard}>
              <Link href={`/urunler/${urun?.id}`}>
                <div className={Styles.image}>
                  <img src={urun?.image_url} />
                </div>
                <div className={Styles.text}>
                  <p>{urun?.title}</p>
                </div>
              </Link>
              <div className={Styles.button}>
                <button
                  className={Styles.addButton}
                  onClick={() => handleAdd(urun)}
                >
                  Sepete Ekle
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCards;
