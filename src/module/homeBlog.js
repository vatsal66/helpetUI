/* eslint-disable no-console */
import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { BlogHeader, Footer } from '@components/common';
import {
  FirstHomeBlog,
  SecondHomeBlog,
  ThirdHomeBlog,
  FifthHomeBlog,
  PaginationHomeBlog,
} from '@components/homeBlog';

const homeBlog = () => {
  const [activeSideCategory, setActiveSideCategory] = useState('');

  const handleSearch = (e) => {
    navigate('/homeBlog', { state: { data: e } });
    setActiveSideCategory('');
  };

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <BlogHeader
        activeSideCategory={activeSideCategory}
        handleSearch={handleSearch}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <FirstHomeBlog
          activeSideCategory={activeSideCategory}
          setActiveSideCategory={setActiveSideCategory}
        />
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
