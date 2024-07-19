import React from 'react';

import { Footer, Navbar } from '@components/common';
import { AccordianMainCard } from '@components/nearMeCardDetail';

const nearmedetail = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <AccordianMainCard />
      <Footer />

    </div>
  );
};

export default nearmedetail;
