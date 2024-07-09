import React from 'react'
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';
import useLanguage from '@hooks/useLanguage';

import { Footer, Navbar } from '@components/common';
import { DropDownValueNearMe, NearMeSelectionSection } from '@components/nearMeRicera';

const index5 = () => {
	const [messages, { locale }] = useLanguage();

	return (
		<div style={{
			background: '#EEFFF8'
		}}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<IntlProvider defaultLocale="it" locale={locale} messages={messages}>
					<Navbar />
          <div style={{
            paddingTop: '200px'
          }}>
  					<DropDownValueNearMe />
          </div>
					<div>
						<NearMeSelectionSection />
					</div>
					<Footer />
				</IntlProvider>
			</ThemeProvider>
		</div>
	)
}

export default index5		
