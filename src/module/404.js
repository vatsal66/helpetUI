/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { Footer, Navbar } from '@components/common';
import { HeaderNoPage } from '@components/NoPageFound';

const NotFoundPage = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <HeaderNoPage />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
