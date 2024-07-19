// gatsby-browser.js
import React from 'react';

import Layout from './src/pages/index';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
