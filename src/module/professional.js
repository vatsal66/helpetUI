import React from 'react';

import { Footer, Navbar } from '@components/common';
import { ProfessionalForm, ProfessionalMainSection } from '@components/professional';

const professional = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <Navbar />
      <ProfessionalMainSection />
      <ProfessionalForm />
      <Footer />
    </div>
  );
};

export default professional;
