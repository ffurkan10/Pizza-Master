const inputMask = {
  tcno: "99999999999",
  birthday: "99/99/9999",
  birthdayPlaceholder: "GG/AA/YYYY",
};

const inputValidMessage = {
  valid: "Lütfen geçerli bir değer giriniz.",
  mail: "Lütfen geçerli bir E-Posta adresi giriniz!",
  passwordRepeat: "Parolalar aynı olmalıdır. Lütfen tekrar deneyiniz.",
};

const inputValidPattern = {
  mail: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  hasNumber: /\d/,
  hasSmallLetter: /[a-z]+/,
  hasBigLetter: /[A-Z]+/,
  hasSpecialCharacter: /[*@!#%&()^~{}]+/,
};

export { inputMask, inputValidMessage, inputValidPattern };
