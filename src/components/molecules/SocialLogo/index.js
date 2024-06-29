import React from 'react';
import PropTypes from 'prop-types';

import FooterLogo from '@assets/images/footer_logo.svg';
import FBIcon from '@assets/icons/fb_icon.svg';
import InstagramIcon from '@assets/icons/ig_icon.svg';

import { Left, SocialWrapper, Label } from './styled';

const SocialLogo = ({ className }) => {
  return (
    <Left className={className}>
      <FooterLogo />
      <Label>Follow us on</Label>
      <SocialWrapper>
        <a href="https://www.facebook.com/Helpetapp-114572646991770">
          <FBIcon />
        </a>
        <a href="https://instagram.com/helpet.app/">
          <InstagramIcon />
        </a>
      </SocialWrapper>
    </Left>
  );
};

SocialLogo.propTypes = {
  className: PropTypes.string,
};

SocialLogo.defaultProps = {
  className: '',
};

export default SocialLogo;
