import React from "react";
import DataPageTr from "../locales/index.json";
import Banner from "./components/banner";
import ProductCards from "./components/productCard";
import TextImage from "./components/textImage";
import WhyUs from "./components/why-us";
import { getData } from "@/utils/getData/index.js";
import Head from "next/head";
// import FaqData from "@/locales/sss.js";
import Question from "./components/question/Question";
import Campaign from "./components/campaign";

const faqData = [
  {
    id: 0,
    title: "Teslimat süresi nedir?",
    desc: "Teslimat süresi, siparişinizin büyüklüğüne ve teslimat adresinize bağlı olarak değişebilir. Genellikle siparişinizin 30-45 dakika içinde teslim edilmesi hedeflenir.",
  },
  {
    id: 1,
    title: "Gluten-free (gluten içermeyen) pizza seçeneğiniz var mı?",
    desc: "Evet, müşterilerimize gluten içermeyen pizza seçenekleri sunuyoruz.",
  },
  {
    id: 2,
    title: "İade veya değişim politikanız nedir?",
    desc: "Müşteri memnuniyeti bizim için önceliktir. Siparişinizle ilgili herhangi bir sorunuz veya şikayetiniz varsa, lütfen bizimle iletişime geçin.",
  },
];

const Home = async () => {
  const pizza = await getData();

  return (
    <>
      <Head>
        <title>{DataPageTr.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Banner
        image={DataPageTr?.heroData?.bannerImage}
        title={DataPageTr?.heroData?.title}
        text={DataPageTr?.heroData?.text}
        bilgi={DataPageTr?.heroData?.bilgi}
        click={DataPageTr?.heroData?.click}
      />

      <ProductCards
        title={DataPageTr?.urunlerTitle}
        data={pizza.data.recipes.slice(1, 5)}
        isHome
      />

      <TextImage
        title={DataPageTr?.offer?.title}
        text={DataPageTr?.offer?.text}
        image={DataPageTr?.offer?.image}
      />

      <WhyUs
        title={DataPageTr?.whyUs?.title}
        data={DataPageTr?.whyUs?.dataFeatureList}
      />

      <Campaign />

      <Question data={faqData} />
    </>
  );
};

export default Home;
