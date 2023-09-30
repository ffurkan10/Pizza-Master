import React from "react";
import { getData } from "@/utils/getData";
import Styles from "./styles.module.scss";
import ProductCards from "@/app/components/productCard";
import Breadcrumb from "@/app/components/breadcrumb";

const breadcrumbData = [
  {
    link: "/",
    text: "Ana Sayfa",
  },
  {
    link: "/urunler",
    text: "Ürünler",
  },
  {
    link: "",
    text: "Ürün Detay",
  },
];

const Detay = async ({ params }) => {
  const pizza = await getData();

  const pizzaDetay = pizza.data.recipes.find((pizza) => pizza.id === params.id);

  return (
    <div className="container">
      <Breadcrumb data={breadcrumbData} />

      <div className={Styles.detay}>
        <div className={Styles.imageBox}>
          <h2>{pizzaDetay.title}</h2>
          <img src={pizzaDetay.image_url} alt="" />
        </div>

        <div className={Styles.tarif}>
          <div className={Styles.malzemeler}>
            <h3>Pizza hamuru için malzemeler:</h3>
            <ul className={Styles.list}>
              <li>1 paket pizza hamuru karışımı</li>
              <li>1/2 su bardağı ılık su</li>
              <li>2 yemek kaşığı zeytinyağı</li>
            </ul>
          </div>
          <div className={Styles.malzemeler}>
            <h3>Pizza sosu için malzemeler:</h3>
            <ul className={Styles.list}>
              <li>1 su bardağı domates sosu</li>
              <li>1 tatlı kaşığı zeytinyağı</li>
              <li>1 diş sarımsak (isteğe bağlı), ezilmiş</li>
              <li>Tuz ve karabiber</li>
            </ul>
          </div>
          <div className={Styles.malzemeler}>
            <h3>Pizza malzemeleri:</h3>
            <ul className={Styles.list}>
              <li>
                Dilimlenmiş pepperoni, mantar, yeşil biber, siyah zeytin, soğan,
                mısır.
              </li>
              <li>Kuru kekik</li>
              <li>Parmesan peyniri rendesi</li>
              <li>Taze fesleğen yaprakları</li>
            </ul>
          </div>
        </div>
      </div>

      <ProductCards
        title={"Diğer Pizzalar"}
        data={pizza.data.recipes.slice(1, 5)}
      />
    </div>
  );
};

export default Detay;
