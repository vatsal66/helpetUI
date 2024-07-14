import React from 'react'
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import useLanguage from '@hooks/useLanguage';

import { Footer, Navbar } from '@components/common';
import { MainFaqCard } from '@components/FAQ';

const faq = () => {
  const [messages, { locale }] = useLanguage();

  return (
    <div style={{
      background: '#EEFFF8'
    }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <IntlProvider defaultLocale="it" locale={locale} messages={messages}>
          <Navbar />
          <MainFaqCard />
          <Footer />
        </IntlProvider>
      </ThemeProvider>
    </div>
  )
}

export default faq

// 38