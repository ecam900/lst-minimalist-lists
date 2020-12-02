import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { AuthProvider } from '../lib/auth';
import AuthGuard from '../lib/AuthGuard';
import Layout from '../components/layout/Layout';
import React from 'react';
import { ProvideLists } from '../lib/listsContext';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Get dynamic persistent layouts with this.
  const getLayout =
    Component.getLayout || ((page) => <Layout children={page} />);

  return (
    <React.Fragment>
      <Head>
        <title>LST - Minimalist Lists</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* Firebase Auth */}
        <AuthProvider>
          <ProvideLists>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AuthGuard>
              {getLayout(<Component {...pageProps} />)}
            </AuthGuard>
          </ProvideLists>
        </AuthProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
