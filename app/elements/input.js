"use client";
import React, { useEffect, useState, forwardRef } from "react";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";
import InputMask from "react-input-mask";

const Input = React.forwardRef(({ ...props }, ref) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    mask,
    prependIcon,
    appendIcon,
    error,
    hasErrorControl = true,
  } = props;
  const [isChanged, setIsChanged] = useState(false);

  const handlerOnChange = (event) => {
    onChange?.(event);
    setIsChanged(true);
  };

  useEffect(() => {}, [error]);

  return (
    <div className="Input">
      <div className="Input-Container">
        {!!label && (
          <label className={`${!!error ? "has-error" : ""}`}>{label}</label>
        )}
        <div
          className={`input-group 
						${!!prependIcon ? "icon-left" : ""}
						${!!appendIcon ? "icon-right" : ""}
						${!!value ? "" : "is-empty"}
						${!!error ? "has-error" : ""}
						${error == undefined && isChanged && hasErrorControl ? "is-success" : ""}
				`}
        >
          {!!prependIcon && (
            <span className="icon icon-prepend">{prependIcon}</span>
          )}

          {!!mask ? (
            <InputMask
              placeholder={placeholder}
              mask={mask}
              value={value}
              onChange={(event) => handlerOnChange(event.target.value)}
            >
              <input ref={ref} type={type} className="input-control" />
            </InputMask>
          ) : (
            <input
              ref={ref}
              type={type}
              className="input-control"
              value={value}
              onChange={(event) => handlerOnChange(event.target.value)}
              placeholder={placeholder}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default Input;
