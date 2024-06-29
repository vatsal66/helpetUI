import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { Button } from '@components/atoms';

import CardDetail from '@assets/icons/card-detail.svg';

import { TypeText, Container, Title, Description } from './styled';

const Card = ({ className, animated, card }, ref) => {
  const { messages } = useIntl();

  return (
    <Container {...{ ref, className, animated }}>
      <TypeText>{messages[`cards.${card}.type`]}</TypeText>
      <CardDetail width={140} />
      <Title>{messages[`cards.${card}.title`]}</Title>
      <Description>{messages[`cards.${card}.description`]}</Description>
      <Button
        as="a"
        padding={[12, 24]}
        onClick={() => scrollTo('#header-download')}
      >
        {messages['downloadApp']}
      </Button>
    </Container>
  );
};

Card.propTypes = {
  card: PropTypes.string.isRequired,
  className: PropTypes.string,
  animated: PropTypes.bool,
};

Card.defaultProps = {
  className: '',
  animated: false,
};

export default forwardRef(Card);
