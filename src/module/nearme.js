import React from 'react';

import { Carousel, DropDownValue, HeaderPetId, PlayStore } from '@components/nearMe';
import { Footer, Navbar } from '@components/common';

const nearme = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <HeaderPetId />
      <DropDownValue />
      <Carousel />
      <PlayStore />
      <Footer />
    </div>
  );
};

export default nearme;
