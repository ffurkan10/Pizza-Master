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

const SignUp = () => {
  const name = useSelector((state) => state?.auth?.name);
  const email = useSelector((state) => state?.auth?.email);
  const password = useSelector((state) => state?.auth?.password);
  const isLoading = useSelector((state) => state?.auth?.isLoading);

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
    // <form onSubmit={handleSubmit}>
    //   <h1>Üye Ol</h1>
    //   <input
    //     type="text"
    //     autoFocus
    //     autoComplete="name"
    //     name="name"
    //     placeholder="Ad"
    //     required
    //     onChange={handleName}
    //     value={name}
    //   />
    //   <input
    //     type="email"
    //     autoComplete="email"
    //     name="email"
    //     placeholder="Email"
    //     required
    //     onChange={handleEmail}
    //     value={email}
    //   />
    //   <input
    //     type="password"
    //     autoComplete="password"
    //     name="password"
    //     placeholder="Şifre"
    //     required
    //     onChange={handlePassword}
    //     value={password}
    //   />
    //   <button type="submit" disabled={isLoading}>
    //     {isLoading ? "Yükleniyor..." : "Üye ol"}
    //   </button>
    //   <div className="sign__container__link">
    //     <Link href="/giris-yap">Bir hesabın var mı? Giriş yap</Link>
    //   </div>
    // </form>
    <>
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
    </>
  );
};

export default SignUp;
