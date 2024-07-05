import React from 'react'
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import useLanguage from '@hooks/useLanguage';
import { Footer, Navbar } from '@components/common';
import { 
		CardLibretto,
		CarouselLibretto,
		HeaderLibretto,
		PlayStore
	} from '@components/LibrettoSanitario';

const index2 = () => {
	const [messages, { locale, setLocale }] = useLanguage();

	return (
		<div style={{
			background: '#EEFFF8'
		}}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<IntlProvider defaultLocale="it" locale={locale} messages={messages}>
					<Navbar />
					<HeaderLibretto />
					<CarouselLibretto />
					<CardLibretto />
					<PlayStore />
					<Footer />
				</IntlProvider>
			</ThemeProvider>
		</div>
	)
}

export default index2
