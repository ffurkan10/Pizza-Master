import React from "react";
import Styles from "./styles.module.scss";
import Link from "next/link";

const SignForm = ({
  title,
  handleSubmit,
  handleName,
  handleEmail,
  handlePassword,
  name,
  email,
  password,
  isSignUp,
  button,
  linkText,
  isLoading,
  linkHref,
}) => {
  return (
    <div className="container">
      <div className={Styles.signForm}>
        <form onSubmit={handleSubmit}>
          <h1>{title}</h1>

          {isSignUp && (
            <input
              type="text"
              autoFocus
              autoComplete="name"
              name="name"
              placeholder="Ad Soyad"
              required
              onChange={handleName}
              value={name}
            />
          )}

          <input
            type="email"
            autoComplete="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleEmail}
            value={email}
          />
          <input
            type="password"
            autoComplete="password"
            name="password"
            placeholder="Şifre"
            required
            onChange={handlePassword}
            value={password}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Yükleniyor..." : `${button}`}
          </button>
          <div className={Styles.link}>
            <Link href={linkHref}>{linkText}</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignForm;
