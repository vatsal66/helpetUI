import React, { useState, useCallback } from 'react';
import { useIntl } from 'react-intl';

import { Button, Checkbox } from '@components/atoms';

import { isEmail } from '@helpers/validations';

import sendMail from '@services/sendMail';

import {
  Container,
  InputContainer,
  Inline,
  StyledInput,
  ButtonWrapper,
} from './styled';

const NewsletterForm = () => {
  const { messages } = useIntl();

  const [isFormChecked, setIsFormChecked] = useState(false);
  const [form, setForm] = useState({
    email: '',
  });

  const { email } = form;

  const isValidForm = useCallback(() => isEmail(email), [email]);

  const handleTextChange = (input, value) =>
    setForm((prevState) => ({
      ...prevState,
      [input]: value,
    }));

  const handlePressCheckbox = () => {
    setIsFormChecked(!isFormChecked);
  };

  const handleSendNewsletterForm = async (e) => {
    e.preventDefault();

    const sendNewsletterEmail = sendMail(
      process.env.API_NEWSLETTER_ENDPOINT,
      process.env.API_GATEWAY_KEY,
    );

    if (isFormChecked) {
      if (isValidForm()) {
        await sendNewsletterEmail({
          name,
          email,
        });
      }

      setForm({
        name: '',
        email: '',
      });
    }
  };

  return (
    <Container onSubmit={handleSendNewsletterForm}>
      <InputContainer>
        <Inline>
          <StyledInput
            placeholderMessageId="email"
            value={email}
            onChangeText={(value) => handleTextChange('email', value)}
          />
        </Inline>
        <Checkbox
          label={messages['newsletter.checkboxTermsOfUse']}
          onClick={handlePressCheckbox}
        />
      </InputContainer>
      <ButtonWrapper>
        <Button
          padding={[16, 52]}
          upperCase
          disabled={!(isFormChecked && isValidForm())}
        >
          {messages['newsletter.button']}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default NewsletterForm;
