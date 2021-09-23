import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';

import theme from 'ui/themes/theme';
import '@styles/globals.css';
import { AppContainer } from '@styles/page/_app.style';
import Header from '@components/surfaces/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        document.querySelector('#jss-server-side')?.remove();
    }, []);

    return (
        <>
            <Head>
                <title>
                    Dad Jokes {pageProps?.title && `- ${pageProps?.title}`}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <AppContainer>
                    <Header />
                    <Component {...pageProps} />
                    {/* <Footer /> */}
                </AppContainer>
            </ThemeProvider>
        </>
    );
}
export default MyApp;
