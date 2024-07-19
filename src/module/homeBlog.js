import React from 'react';

import { BlogHeader, Footer } from '@components/common';
import {
  FirstHomeBlog,
  SecondHomeBlog,
  ThirdHomeBlog,
  FifthHomeBlog,
  PaginationHomeBlog,
} from '@components/homeBlog';

const homeBlog = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <BlogHeader />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <FirstHomeBlog />
        <SecondHomeBlog />
        <ThirdHomeBlog />
        <FifthHomeBlog />
      </div>
      <PaginationHomeBlog />
      <Footer />
    </div>
  );
};

export default homeBlog;
