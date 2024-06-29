import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Tag } from '@components/atoms';

import { ItemWrapper, TagWrapper } from './styled';

const CarouselItem = ({ tag, children }) => {
  return (
    <ItemWrapper>
      <div>{children}</div>
      <TagWrapper>
        <Tag color={tag}>
          <FormattedMessage id={`tags.${tag}`} />
        </Tag>
      </TagWrapper>
    </ItemWrapper>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
};

export default CarouselItem;
