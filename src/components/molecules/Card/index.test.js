import React from 'react';

import renderWithTheme from '@mocks/renderWithTheme';

import Card from './index';

describe('<Card />', () => {
  const props = {
    messageTitleId: 'petId.title',
    messageDescriptionId: 'petId.description',
  };

  it('should match snapshot file', () => {
    const { asFragment } = renderWithTheme(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
