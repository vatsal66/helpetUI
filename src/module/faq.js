/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import { Footer, Navbar } from '@components/common';
import { MainFaqCard } from '@components/FAQ';

const faq = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>

      <Navbar />
      <MainFaqCard />
      <Footer />
    </div>
  );
};

export default faq;
