import React, { useState, useCallback } from 'react';
import { useIntl } from 'react-intl';

import { isEmail, isAlpha, isIntlPhoneNumber } from '@helpers/validations';

import sendMail from '@services/sendMail';

import { Container, Inline, StyledInput, StyledButton } from './styled';

const PartnerForm = () => {
  const { messages, locale } = useIntl();

  const [form, setForm] = useState({
    name: '',
    surname: '',
    business: '',
    phone: '',
    address: '',
    email: '',
  });

  const { name, surname, business, phone, address, email } = form;

  const isValidForm = useCallback(
    () =>
      isAlpha(name) &&
      isAlpha(surname) &&
      isIntlPhoneNumber(locale, phone) &&
      isEmail(email),
    [name, surname, phone, email, locale],
  );

  const handleTextChange = (input, value) =>
    setForm((prevState) => ({
      ...prevState,
      [input]: value,
    }));

  const phoneInputWithMask = (browserLang) => {
    const inputWithMask = {
      it: () => (
        <StyledInput
          placeholderMessageId="phone"
          mask="+39 999 999 9999"
          value={phone}
          onChangeText={(value) => handleTextChange('phone', value)}
        />
      ),
      'pt-BR': () => (
        <StyledInput
          placeholderMessageId="phone"
          mask="+55 (99) 9999-9999"
          value={phone}
          onChangeText={(value) => handleTextChange('phone', value)}
        />
      ),
      en: () => (
        <StyledInput
          placeholderMessageId="phone"
          mask="+1 (999) 999-9999"
          value={phone}
          onChangeText={(value) => handleTextChange('phone', value)}
        />
      ),
    };

    return inputWithMask[browserLang]();
  };

  const handleSendPartnerForm = async e => {
    e.preventDefault();

    const sendPartnerMail = sendMail(
      process.env.API_PARTNER_ENDPOINT,
      process.env.API_GATEWAY_KEY,
    );

    if (isValidForm()) {
      sendPartnerMail({
        email,
        name,
        surname,
        business,
        phone,
        address,
      });
    }

    setForm({
      email: '',
      name: '',
      surname: '',
      business: '',
      phone: '',
      address: '',
    });
  };

  return (
    <Container onSubmit={handleSendPartnerForm}>
      <Inline>
        <StyledInput
          placeholderMessageId="name"
          value={name}
          onChangeText={(value) => handleTextChange('name', value)}
          inline
        />
        <StyledInput
          placeholderMessageId="surname"
          value={surname}
          onChangeText={(value) => handleTextChange('surname', value)}
          inline
        />
      </Inline>
      <StyledInput
        placeholderMessageId="business"
        value={business}
        onChangeText={(value) => handleTextChange('business', value)}
      />
      {phoneInputWithMask(locale)}
      <StyledInput
        placeholderMessageId="address"
        value={address}
        onChangeText={(value) => handleTextChange('address', value)}
      />
      <StyledInput
        placeholderMessageId="email"
        value={email}
        onChangeText={(value) => handleTextChange('email', value)}
      />
      <StyledButton upperCase>
        {messages['sendButtonValue']}
      </StyledButton>
    </Container>
  );
};

export default PartnerForm;
