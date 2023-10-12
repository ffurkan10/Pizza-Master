import React from "react";
import Styles from "./styles.module.scss";
import Banner from "../components/banner";
import KampanyaData from "../../locales/kampanyalar.json";
import CampaignCard from "../components/campaignCard";
import Breadcrumb from "../components/breadcrumb";
import Head from "next/head";
import Campaign from "../components/campaign";

const Campaigns = () => {
  return (
    <>
      <Head>
        <title>{KampanyaData.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Breadcrumb data={KampanyaData?.breadcrumbList} />

      <Banner
        isCampaign
        logo={KampanyaData?.pageInfo?.logo}
        image={KampanyaData?.pageInfo?.image}
        title={KampanyaData?.pageInfo?.title}
        text={KampanyaData?.pageInfo?.desc}
      />

      <CampaignCard
        title={KampanyaData?.campain?.allCampainTxt}
        data={KampanyaData?.campain?.dataCampaigns}
      />

      <Campaign />
    </>
  );
};

export default Campaigns;
