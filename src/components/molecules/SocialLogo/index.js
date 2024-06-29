import React from 'react';
import PropTypes from 'prop-types';

import FooterLogo from '@assets/images/footer_logo.svg';
import FaceBookIcon from '@assets/images/Footer/facebook.svg';
import InstragramIcon from '@assets/images/Footer/instagram.svg';
import LinkdinIcon from '@assets/images/Footer/linkdin.svg';
import TiktokIcon from '@assets/images/Footer/tiktok.svg';
import YoutubeIcon from '@assets/images/Footer/youtube.svg';

import { Left, SocialWrapper, Label } from './styled';

const SocialLogo = ({ className }) => {
  return (
    <Left className={className}>
      <FooterLogo />
      <Label>I NOSTRI SOCIAL</Label>
      <SocialWrapper>
        <a>
          <FaceBookIcon />
        </a>
        <a>
          <InstragramIcon />
        </a>
        <a>
          <LinkdinIcon />
        </a>
        <a>
          <TiktokIcon />
        </a>
        <a>
          <YoutubeIcon />
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
