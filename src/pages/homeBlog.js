import React from 'react'
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import useLanguage from '@hooks/useLanguage';
import { Footer } from '@components/common';
import { FirstHomeBlog, FourthHomeBlog, SecondHomeBlog, ThirdHomeBlog, PaginationHomeBlog } from '@components/homeBlog';

const homeBlog = () => {
	const [messages, { locale, setLocale }] = useLanguage();

	return (
		<div style={{
			background: '#EEFFF8'
		}}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<IntlProvider defaultLocale="it" locale={locale} messages={messages}>
					<FirstHomeBlog />
					<SecondHomeBlog />
					<ThirdHomeBlog />
					<FourthHomeBlog />
					<PaginationHomeBlog />
					<Footer />
				</IntlProvider>
			</ThemeProvider>

		</div>
	)
}

export default homeBlog
