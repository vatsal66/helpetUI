/* eslint-disable no-console */
import React, { useState } from 'react';
import { navigate } from 'gatsby';

import { BlogHeader, Footer } from '@components/common';
import { BlogDetailscarousel, SingleBlog, BlogDetailsForm } from '@components/homeBlogDetails';

const homeBlogDetails = () => {
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
      <SingleBlog
        activeSideCategory={activeSideCategory}
        setActiveSideCategory={setActiveSideCategory}
      />
      <BlogDetailscarousel />
      <BlogDetailsForm />
      <Footer />
    </div>
  );
};

export default homeBlogDetails;
