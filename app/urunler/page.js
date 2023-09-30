import { getData } from "@/utils/getData";
import React from "react";
import ProductCards from "../components/productCard";
import Breadcrumb from "../components/breadcrumb";
import UrunlerData from "../../locales/urunler.json";
import Head from "next/head";

const Urunler = async () => {
  const pizza = await getData();

  // function paginateData(data, page, pageSize) {
  //   const startIndex = (page - 1) * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   const paginatedData = data.slice(startIndex, endIndex);
  //   return paginatedData;
  // }

  // const allRecipes = pizza?.data?.recipes;
  // const pageSize = 12;
  // let page = 1;
  // const totalPages = Math.ceil(allRecipes.length / pageSize);
  // const paginatedRecipes = paginateData(allRecipes, page, pageSize);

  return (
    <>
      <Head>
        <title>{UrunlerData?.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Breadcrumb data={UrunlerData?.breadcrumbList} />

      <ProductCards isProduct data={pizza?.data?.recipes} />

      {/* <Pagination page={page} totalPages={totalPages} /> */}
    </>
  );
};

export default Urunler;
