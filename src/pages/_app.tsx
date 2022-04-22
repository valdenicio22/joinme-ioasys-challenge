import { AuthProvider } from '../context/AuthContext'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Header from 'components/Header'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from 'components/Footer'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <meta name="description" content="A project that helps people" />
      </Head>
      <GlobalStyles />
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>

      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
