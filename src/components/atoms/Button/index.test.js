import React from 'react';
import { fireEvent } from '@testing-library/react';

import renderWithTheme from '@mocks/renderWithTheme';

import Button from './index';

describe('<Button />', () => {
  const props = {
    children: 'Teste',
    onClick: jest.fn(),
  };

  it('should match snapshot file', () => {
    const { asFragment } = renderWithTheme(<Button {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should fired event on click the button', () => {
    const { getByText } = renderWithTheme(<Button {...props} />);
    fireEvent(
      getByText(props.children),
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
  });
});
