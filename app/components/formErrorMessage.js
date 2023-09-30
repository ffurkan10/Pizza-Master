"use client";
import React, { useEffect } from "react";

export default function FormErrorMessages({ error, isPassword }) {
  const passwordRules = [
    {
      type: "minLength",
      message: "En az sekiz karakter",
    },
    {
      type: "hasNumber",
      message: "En az bir rakam",
    },
    {
      type: "hasSmallLetter",
      message: "Bir küçük harf",
    },
    {
      type: "hasBigLetter",
      message: "Bir büyük harf",
    },
    {
      type: "hasSpecialCharacter",
      message: "Bir özel karakter",
    },
  ];
  useEffect(() => {}, [error]);
  return (
    <div className="form-error-messages">
      <ul>
        {error?.type === "required" && (
          <li className="item error">{error.message || "Bu alan zorunlu!"}</li>
        )}
        {error?.type === "minLength" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
        {error?.type === "pattern" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
        {error?.type === "validate" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
      </ul>
    </div>
  );
}
