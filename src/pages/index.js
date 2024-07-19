import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import useLanguage from '@hooks/useLanguage';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

import NotFoundPage from "../module/404";
import HomePage from "../module/HomePage";
import FAQ from "../module/faq";
import HomeBlog from "../module/homeBlog";
import HomeBlogDetails from "../module/homeBlogDetails";
import Librettosanitario from "../module/librettosanitario";
import Nearme from "../module/nearme";
import Nearmedetail from "../module/nearmedetail";
import Nearmericerca from "../module/nearmericerca";
import Petid from "../module/petid";
import Professional from "../module/professional";

const App = () => {
  const [messages, { locale }] = useLanguage();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IntlProvider defaultLocale="it" locale={locale} messages={messages}>
        <Router>
          <HomePage path="/" />
          <Petid path="/petid" />
          <Librettosanitario path="/librettosanitario" />
          <Nearme path="/nearme" />
          <Nearmedetail path="/nearmedetail" />
          <Nearmericerca path="/nearmericerca" />
          <FAQ path="/faq" />
          <Professional path="/professional" />
          <HomeBlog path="/homeBlog" />
          <HomeBlogDetails path="/homeBlogDetails" />
          <NotFoundPage default />
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
};

export default App;
