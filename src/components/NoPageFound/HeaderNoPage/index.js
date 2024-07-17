import React from 'react';
import { Link } from 'gatsby';

import {
  HomeButton,
  StyledBigCloud,
  StyledHeader, StyledSmallCloud,
} from './styled';

const HeaderNoPage = () => {
  return (
    <StyledHeader>
      <HomeButton>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
          Torna alla Home
        </Link>
      </HomeButton>

      <StyledSmallCloud top="110px" duration={80} left />
      <StyledSmallCloud top="75px" duration={90} right />
      <StyledBigCloud top="190px" duration={100} left />
      <StyledBigCloud top="150px" duration={70} right />
    </StyledHeader>
  );
};

export default HeaderNoPage;
