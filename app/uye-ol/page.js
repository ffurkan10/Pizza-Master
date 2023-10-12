"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from "../../features/Auth/AuthSlice";
import Link from "next/link";
import SignForm from "../components/sign";
import { useIsLoggedIn } from "@/config/Hooks";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const name = useSelector((state) => state?.auth?.name);
  const email = useSelector((state) => state?.auth?.email);
  const password = useSelector((state) => state?.auth?.password);
  const isLoading = useSelector((state) => state?.auth?.isLoading);
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  const dispatch = useDispatch();

  const handleName = (e) => {
    dispatch(changeName(e.currentTarget.value));
  };

  const handleEmail = (e) => {
    dispatch(changeEmail(e.currentTarget.value));
  };

  const handlePassword = (e) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <>
      {isLoggedIn ? (
        router.push("/")
      ) : (
        <SignForm
          title="Hesap Oluştur"
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          handleName={handleName}
          handlePassword={handlePassword}
          email={email}
          password={password}
          isLoading={isLoading}
          isSignUp
          button="Oluştur"
          linkText="Hesabınız var mı? Giriş yap"
          linkHref="/giris-yap"
        />
      )}
    </>
  );
};

export default SignUp;
