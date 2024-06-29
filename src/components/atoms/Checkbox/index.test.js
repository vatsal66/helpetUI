import React from 'react';
import { fireEvent } from '@testing-library/react';

import renderWithTheme from '@mocks/renderWithTheme';

import Checkbox from './index';

describe('<Checkbox />', () => {
  let component;
  const props = {
    label: 'A Labeled Checkbox',
    onClick: jest.fn(),
  };


  beforeEach(() => {
    component = renderWithTheme(
      <Checkbox {...props} />
    );
  });

  it('should match snapshot', () => {
    const { asFragment } = component;
    expect(asFragment()).toMatchSnapshot();
  });

  it('should fire a onClick function', () => {
    const { getByText } = component;
    fireEvent(
      getByText(props.label),
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
  });
});
