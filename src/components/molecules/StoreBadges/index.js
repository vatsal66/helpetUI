import React from 'react';

import AppleBadgeItSvg from '@assets/icons/apple-store-badge-it.svg';
import AppleBadgePtBrSvg from '@assets/icons/apple-store-badge-pt-br.svg';
import GooglePlayBadgeItPng from '@assets/icons/google-play-badge-it.svg';
import GooglePlayBadgePtBrPng from '@assets/icons/google-play-badge-pt-br.svg';
import AppleBadgeEn from '@assets/icons/apple-store-badge-en.svg';
import GooglePlayBadgeEn from '@assets/icons/google-play-badge-en.svg';

import { BadgesContainer } from './styled';

const appleBadgeStyle = {
  width: 173,
  height: 45,
};

const googleBadgeStyle = {
  width: 173,
};

export default {
  'pt-BR': () => (
    <BadgesContainer id="header-download">
      <a
        href="https://apps.apple.com/us/app/id1515390307"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AppleBadgePtBrSvg style={appleBadgeStyle} />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.helpet"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GooglePlayBadgePtBrPng style={googleBadgeStyle} />
      </a>
    </BadgesContainer>
  ),
  it: () => (
    <BadgesContainer id="header-download">
      <a
        href="https://apps.apple.com/us/app/id1515390307"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AppleBadgeItSvg style={appleBadgeStyle} />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.helpet"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GooglePlayBadgeItPng style={googleBadgeStyle} />
      </a>
    </BadgesContainer>
  ),
  en: () => (
    <BadgesContainer id="header-download">
      <a
        href="https://apps.apple.com/us/app/id1515390307"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AppleBadgeEn style={appleBadgeStyle} />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.helpet"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GooglePlayBadgeEn style={googleBadgeStyle} />
      </a>
    </BadgesContainer>
  ),
};
