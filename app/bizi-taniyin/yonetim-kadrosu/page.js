import React from "react";
import { getUser } from "@/utils/getUser/index.js";
import Users from "@/app/components/users";
import Breadcrumb from "@/app/components/breadcrumb";
import YonetimData from "../../../locales/biz-kimiz/yonetimkadrosu.json";
import Head from "next/head";

const SystemManagement = async () => {
  const user = await getUser();
  return (
    <>
      <Head>
        <title>{YonetimData.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Breadcrumb data={YonetimData?.breadcrumbList} />

      <Users data={user?.users} />
    </>
  );
};

export default SystemManagement;
