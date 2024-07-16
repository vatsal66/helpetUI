import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { Footer, Navbar } from '@components/common';
import { DropDownValueNearMe, NearMeSelectionSection } from '@components/nearMeRicera';

import useLanguage from '@hooks/useLanguage';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

const nearmericerca = () => {
  const [messages, { locale }] = useLanguage();

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IntlProvider defaultLocale="it" locale={locale} messages={messages}>
          <Navbar />
          <DropDownValueNearMe />
          <NearMeSelectionSection />
          <Footer />
        </IntlProvider>
      </ThemeProvider>
    </div>
  );
};

export default nearmericerca;
