import React from 'react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { Helmet } from 'react-helmet';

import {
  Header,
  Carousel,
  CarouselNew,
  FormSection,
  Benefits,
  Newsletter,
  CookiesWarning,
  Footer,
  Main,
  Navbar,
} from '@components/organisms';

import useLanguage from '@hooks/useLanguage';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
const IndexPage = () => {
  const [messages, { locale, setLocale }] = useLanguage();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider defaultLocale="it" locale={locale} messages={messages}>
        <Helmet>
          <title>{`Helpet: ${messages['title']}`}</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Un'applicazione pensata per gestire al meglio le necessità del tuo amico a quattro zampe. Tanti servizi utili sempre a portata di mano."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Helpet: la nuova App per i tuoi Pet"
          />
          <meta
            property="og:description"
            content="Un'applicazione pensata per gestire al meglio le necessità del tuo amico a quattro zampe. Tanti servizi utili sempre a portata di mano."
          />
          <meta property="og:image" content="/assets/images/og-image.png" />
          <meta property="og:image:alt" content="Helpetapp" />
          <meta property="og:url" content="https://helpetapp.com" />
          <meta property="og:site_name" content="Helpet" />

          <meta name="twitter:card" content="photo" />
          <meta name="twitter:url" content="https://helpetapp.com" />
          <meta
            name="twitter:title"
            content="Helpet: la nuova App per i tuoi Pet"
          />
          <meta name="twitter:image" content="/assets/images/og-image.png" />
        </Helmet>
        <Navbar onChangeLanguage={(lang) => setLocale(lang)} />
        <Header onChangeLanguage={(lang) => setLocale(lang)} />
        <Main />
        {/* <Carousel /> */}
        <CarouselNew />
        <Benefits />
        <FormSection />
        <Newsletter />
        <Footer />
        <CookiesWarning />
      </IntlProvider>
    </ThemeProvider>
  );
};

export default IndexPage;
