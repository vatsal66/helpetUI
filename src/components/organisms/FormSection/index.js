import React from 'react';
import { useIntl } from 'react-intl';

import { PartnerForm } from '@components/molecules';

import {
  StyledContentSection,
  LeftDiv,
  Title,
  Subtitle,
  Description,
} from './styled';

const FormSection = () => {
  const { messages } = useIntl();

  return (
    <StyledContentSection>
      <LeftDiv>
        <Subtitle>{messages['formSection.subtitle']}</Subtitle>
        <Title>{messages['formSection.title']}</Title>
        <Description>{messages['formSection.description']}</Description>
      </LeftDiv>
      <PartnerForm />
    </StyledContentSection>
  );
};

export default FormSection;
