import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import { Footer, Navbar } from '@components/common';
import { AccordianMainCard } from '@components/nearMeCardDetail';

import useLanguage from '@hooks/useLanguage';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

const nearmedetail = () => {
  const [messages, { locale }] = useLanguage();

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IntlProvider defaultLocale="it" locale={locale} messages={messages}>
          <Navbar />
          <AccordianMainCard />
          <Footer />

        </IntlProvider>
      </ThemeProvider>
    </div>
  );
};

export default nearmedetail;
