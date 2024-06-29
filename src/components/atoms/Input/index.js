import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { StyledInput } from './styled';

const Input = ({
  className,
  type,
  placeholderMessageId,
  value,
  mask,
  maskPlaceholder,
  onChangeText,
}) => {
  const { messages } = useIntl();

  return (
    <StyledInput
      placeholder={messages[`inputs.${placeholderMessageId}`]}
      onChange={(e) => onChangeText(e.target.value)}
      {...{ className, type, mask, maskPlaceholder, value }}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  placeholderMessageId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  error: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
};

Input.defaultProps = {
  className: null,
  maskPlaceholder: null,
  type: 'text',
  error: false,
};

export default Input;
