import React from 'react';
// import { Helmet } from 'react-helmet';

import {
  Header,
  // Carousel,
  CarouselNew,
  // FormSection,
  AboutUs,
  // Benefits,
  Newsletter,
  CookiesWarning,
  Main,
} from '@components/organisms';
import {
  Footer,
  Navbar,
} from '@components/common';

import useLanguage from '@hooks/useLanguage';

const HomePage = () => {
  const [{ setLocale }] = useLanguage();

  return (
    <>
      {/* <Helmet>
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
        </Helmet> */}
      <Navbar onChangeLanguage={(lang) => setLocale(lang)} />
      <Header onChangeLanguage={(lang) => setLocale(lang)} />
      <Main />

      {/* <Carousel /> */}
      <CarouselNew />
      {/* <Benefits />
      <FormSection /> */}
      <AboutUs />
      <Newsletter />
      <div  style={{ height: '150px', backgroundColor: 'rgb(0,179,136)' }}/>
      <Footer />
      <CookiesWarning />
    </>

  );
};

export default HomePage;
