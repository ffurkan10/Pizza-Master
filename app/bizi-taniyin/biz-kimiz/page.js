import TextComponent from "@/app/components/text";
import React from "react";
import DataWho from "../../../locales/biz-kimiz/bizi-taniyin.json";
import TextCard from "@/app/components/textCard";
import Breadcrumb from "@/app/components/breadcrumb";
import Head from "next/head";

const WhoWeAre = () => {
  return (
    <>
      <Head>
        <title>{DataWho.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Breadcrumb data={DataWho?.breadcrumbList} />

      <TextComponent
        topTitle={DataWho?.pageInfo?.title}
        data={DataWho?.WhoWeAre?.dataAffiliates}
        image={DataWho?.WhoWeAre?.image}
      />
      <TextCard
        data={DataWho?.dataNumbers}
        dataTitle={DataWho?.bannerNumbersTitle}
      />
    </>
  );
};

export default WhoWeAre;
