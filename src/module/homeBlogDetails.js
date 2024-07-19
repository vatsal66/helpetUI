import React from 'react';

import { BlogHeader, Footer } from '@components/common';
import { BlogDetailscarousel, SingleBlog, BlogDetailsForm } from '@components/homeBlogDetails';

const homeBlogDetails = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <BlogHeader />
      <SingleBlog />
      <BlogDetailscarousel />
      <BlogDetailsForm />
      <Footer />
    </div>
  );
};

export default homeBlogDetails;
