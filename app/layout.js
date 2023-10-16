"use client";

import "@/styles/global.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import "@/styles/phoneInput.scss";
import { Provider } from "react-redux";
import Store from "@/store/Store";
import { Providers } from "@/features/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="layoutContainer">
        <Provider store={Store}>
          <Header />
          <main>
            <ToastContainer position="bottom-left" />

            {children}
            {/* <Providers></Providers> */}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
