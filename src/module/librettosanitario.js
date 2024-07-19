import React from 'react';

import { Footer, Navbar } from '@components/common';
import {
  CardLibretto,
  CarouselLibretto,
  HeaderLibretto,
  PlayStore,
} from '@components/LibrettoSanitario';

const librettosanitario = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <HeaderLibretto />
      <CarouselLibretto />
      <CardLibretto />
      <PlayStore />
      <Footer />
    </div>
  );
};

export default librettosanitario;
