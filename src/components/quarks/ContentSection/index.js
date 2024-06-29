import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './styled';

const ContentSection = ({ children, className }) => (
  <Section className={className}>{children}</Section>
);

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ContentSection.defaultProps = {
  className: '',
};

export default ContentSection;
