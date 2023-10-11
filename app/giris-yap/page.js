"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  changeEmail,
  changePassword,
  logIn,
} from "../../features/Auth/AuthSlice";
import SignForm from "../components/sign";
import { useRouter } from "next/navigation";
import { useIsLoggedIn } from "@/config/Hooks";

const SignIn = () => {
  const email = useSelector((state) => state?.auth?.email);
  const password = useSelector((state) => state?.auth?.password);
  const isLoading = useSelector((state) => state?.auth?.isLoading);

  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password })).then((success) => {
      if (success) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        router.push("/")
      ) : (
        <SignForm
          title="Giriş Yap"
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          handlePassword={handlePassword}
          email={email}
          password={password}
          isLoading={isLoading}
          button="Giriş Yap"
          linkText="Hesabınız yok mu? Hesap oluştur"
          linkHref="/uye-ol"
        />
      )}
    </>
  );
};

export default SignIn;
