import React from 'react';

import { BlogHeader } from '@components/common';
import { SingleBlog } from '@components/homeBlogDetails';

const homeBlogDetails = () => {

  return (
    <div style={{
      background: '#EEFFF8',
    }}>
      <BlogHeader />
      <SingleBlog />
    </div>
  );
};

export default homeBlogDetails;
