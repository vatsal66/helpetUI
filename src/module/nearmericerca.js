import React from 'react';

import { Footer, Navbar } from '@components/common';
import { DropDownValueNearMe, NearMeSelectionSection } from '@components/nearMeRicera';

const nearmericerca = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <DropDownValueNearMe />
      <NearMeSelectionSection />
      <Footer />
    </div>
  );
};

export default nearmericerca;
