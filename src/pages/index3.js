import React from 'react'
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import useLanguage from '@hooks/useLanguage';
import { Footer, Navbar } from '@components/organisms';
import { CartPetId, HeaderPetId, Carousel } from '@components/petId';

const index3 = () => {
  const [messages, { locale, setLocale }] = useLanguage();

	return (
		<div style={{
			background: '#EEFFF8'
		}}>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<IntlProvider defaultLocale="it" locale={locale} messages={messages}>
				<Navbar />
				<HeaderPetId />
				<CartPetId />
				<Carousel />
				<Footer />
			</IntlProvider>
		</ThemeProvider>
		</div>
	)
}

export default index3
