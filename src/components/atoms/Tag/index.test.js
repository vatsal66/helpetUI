import React from 'react';

import renderWithTheme from '@mocks/renderWithTheme';

import Tag from './index';

describe('<Tag />', () => {
  const props = {
    color: 'veterinary',
  };

  it('should match snapshot file', () => {
    const { asFragment } = renderWithTheme(<Tag {...props}>Veterinário</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
