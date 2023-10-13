import React from "react";
import Styles from "./styles.module.scss";
import cn from "classnames";
import İletisimData from "../../locales/iletisim.json";
import ContactCard from "../components/contactCard";
import * as Bscons from "react-icons/bs";
import * as Mdicons from "react-icons/md";
import ContactForm from "../components/contactForm";
import Breadcrumb from "../components/breadcrumb";
import Head from "next/head";
import Question from "@/app/components/question/Question";

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

const Iletisim = () => {
  return (
    <div className="container">
      <Head>
        <title>{İletisimData.meta?.title}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Breadcrumb data={İletisimData?.breadcrumbList} />

      <div className={Styles.contact}>
        <div className={Styles.header}>
          <h1>{İletisimData.pageInfo.title}</h1>
        </div>
        <div className={Styles.iletisim}>
          <div className={Styles.contactMain}>
            <div className={Styles.leftText}>
              <h3>{İletisimData.contentTxt.title}</h3>
              <p className={Styles.iletisimText}>
                {İletisimData.contentTxt.text}
              </p>

              <ContactCard
                data={İletisimData?.dataContactInfoList[1]}
                href={"mailto:ffurkankocabyk@hotmail.com"}
                icon={<Mdicons.MdMail fill="#ff6720" width={30} height={30} />}
              />
              <ContactCard
                data={İletisimData?.dataContactInfoList[0]}
                href={"tel:05422592721"}
                icon={<Bscons.BsFillTelephoneFill fill="#ff6720" />}
              />
            </div>
          </div>
          <div className={Styles.form}>
            <ContactForm />
          </div>
        </div>

        <Question data={faqData} />
      </div>
    </div>
  );
};

export default Iletisim;
