"use client";
import Input from "@/app/elements/input";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormErrorMessages from "../formErrorMessage";
import PhoneInput from "react-phone-input-2";
import tr from "../../../locales/countryList.json";
import Button from "@/app/elements/button";
import {
  inputMask,
  inputValidMessage,
  inputValidPattern,
} from "../../helpers/inputHelpers";
import Modal from "@/app/elements/modal";
import Styles from "./styles.module.scss";

const ContactForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);

  const {
    register,
    watch,
    formState: { errors, isDirty },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: "all",
  });

  const watchAllFields = watch();
  const [isActiveSendButton, setIsActiveSendButton] = useState(false);
  useEffect(() => {
    const formDataArray = Object.entries(watchAllFields);
    const errorsLength = Object.keys(errors).length;
    const isActive = formDataArray.every((item) => item[1]);
    setIsActiveSendButton(isActive && errorsLength === 0);
  }, [watchAllFields]);

  const onSubmit = () => {
    if (handleSubmit) {
      reset({
        name: "",
        surname: "",
        phone: "+90",
        mail: "",
        message: "",
      });
      setPhoneModal(true);
    }
  };
  const togglePhone = () => {
    setPhoneModal((prevPhoneModal) => !prevPhoneModal);
  };

  return (
    <>
      <form
        className={Styles.form}
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <h3>Bizimle İletişime Geçin</h3>
        <div className="form-row">
          <div className="form-col">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              register={register("name", {
                required: {
                  value: true,
                  message: "Lütfen bir isim giriniz.",
                },
                minLength: {
                  value: 2,
                  message: "Eksik isim girdiniz.",
                },
              })}
              render={({ field }) => {
                return (
                  <Input
                    type="text"
                    className="input"
                    placeholder="Ad"
                    label="Ad"
                    error={errors?.name}
                    {...field}
                  />
                );
              }}
            />
            <FormErrorMessages error={errors?.name} />
          </div>
          <div className="form-col">
            <Controller
              name="surname"
              control={control}
              defaultValue=""
              register={register("surname", {
                required: {
                  value: true,
                  message: "Lütfen bir soyisim giriniz",
                },
                minLength: {
                  value: 2,
                  message: "Eksik soyisim girdiniz.",
                },
              })}
              render={({ field }) => (
                <Input
                  type="text"
                  className="input"
                  placeholder="Soyad"
                  label="Soyad"
                  error={errors?.surname}
                  {...field}
                />
              )}
            />
            <FormErrorMessages error={errors?.surname} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <Controller
              name="mail"
              control={control}
              defaultValue=""
              register={register("mail", {
                required: {
                  value: true,
                  message: "Lütfen bir mail adresi giriniz",
                },
                pattern: {
                  value: inputValidPattern.mail,
                  message: "Hatalı mail adresi",
                },
              })}
              render={({ field }) => (
                <Input
                  type="mail"
                  className="input"
                  placeholder="E-Mail"
                  label="E-Mail"
                  error={errors?.mail}
                  {...field}
                />
              )}
            />
            <FormErrorMessages error={errors?.mail} />
          </div>
          <div className="form-col">
            <div
              className={`phone-input-group ${
                !!errors?.phone ? "has-error" : ""
              }`}
            >
              <label>Telefon</label>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                register={register("phone", {
                  required: {
                    value: true,
                    message: "Lütfen bir numara giriniz.",
                  },
                  minLength: {
                    value: 10,
                    message: "Eksik numara girdiniz.",
                  },
                })}
                render={({ field }) => (
                  <PhoneInput
                    country={"tr"}
                    localization={tr}
                    enableSearch={true}
                    searchPlaceholder="bölge"
                    onChange={(phone) => setPhone(phone)}
                    error={errors?.phone}
                    {...field}
                  />
                )}
              />

              <FormErrorMessages error={errors?.phone} />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-col">
            <div className="textarea-group">
              <label>Mesajınız</label>
              <textarea
                placeholder="Mesaj Giriniz"
                name="message"
                defaultValue=""
                className="textarea-control"
                control={control}
                {...register("message", {
                  required: {
                    value: true,
                    message: "Lütfen bir metin yazınız.",
                  },
                  minLength: {
                    value: 50,
                    message: "Eksik karakter.",
                  },
                })}
              />
              <FormErrorMessages error={errors?.message} />
            </div>
          </div>
        </div>

        <div className="form-col form-button">
          <Button
            disabled={!isActiveSendButton}
            size="medium"
            variant="default"
            theme="dark"
          >
            Gönder
          </Button>
        </div>
      </form>

      <Modal
        isOpen={phoneModal}
        toggle={togglePhone}
        className="loginPortalModal"
      >
        <div>
          <p>Form Başarılı Bir Şekilde İletildi</p>
          <a target="_blank" href="/">
            Anasayfaya Dön
          </a>
        </div>
      </Modal>
    </>
  );
};

export default ContactForm;
