import React from 'react';

import Categories from '@components/homeBlog/Categories';

import { StartComponents, StyledContentSection } from './styled';

const FirstHomeBlog = () => {

  return (
    <div style={{
      padding: '240px 0 0 0',
    }}>
      <StyledContentSection>
        <StartComponents>
          <div style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Categories />
          </div>
          <div style={{ width: '75%' }}>
            Test
          </div>
        </StartComponents>

      </StyledContentSection>
    </div>
  );
};

export default FirstHomeBlog;
