const isIntlPhoneNumber = (locale, string) => {
  const matchLocalePhoneNumber = {
    it: string => {
      const regEx = /\+39 (\d{3}) (\d{3}) (\d{4})$/;
      return regEx.test(string);
    },
    'pt-BR': string => {
      const regEx = /\+55 (\(\d{2}\)) 9 (\d{4})-(\d{4})$/;
      return regEx.test(string)
    },
    en: string => {
      const regEx = /\+1 (\(\d{3}\)) (\d{3})-(\d{4})$/;
      return regEx.test(string);
    },
  };

  return matchLocalePhoneNumber[locale](string);
}

export default isIntlPhoneNumber;
