import { useState, useLayoutEffect } from 'react';
import lang, { flattenMessages } from '@lang';

const useLanguage = () => {
  const [locale, setLocale] = useState('it');
  const getBrowserLanguage = () => {
    if (typeof window !== 'undefined') {
      return navigator.language;
    }

    return 'it';
  };

  const browserLanguage = getBrowserLanguage();

  useLayoutEffect(() => {
    if (Object.keys(lang).includes(browserLanguage)) {
      setLocale(browserLanguage);
    }
  }, [browserLanguage]);

  return [flattenMessages(lang[locale]), { locale, setLocale }];
};

export default useLanguage;
