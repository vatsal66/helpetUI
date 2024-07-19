import React from 'react';

import { Footer, Navbar } from '@components/common';
import { CartPetId, HeaderPetId, Carousel, CardAfterCarousel, PlayStore } from '@components/petId';

const petid = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <HeaderPetId />
      <CartPetId />
      <Carousel />
      <CardAfterCarousel />
      <PlayStore />
      <Footer />

    </div>
  );
};

export default petid;
