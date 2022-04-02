import { AuthProvider } from '../context/AuthContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A project that helps people with mental health issues"
        />
      </Head>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>

      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
