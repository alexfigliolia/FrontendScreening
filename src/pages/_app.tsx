import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '@components/Layout/Theme'
import GlobalStyles from '@components/Layout/GlobalStyles'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/images/favicon.png" sizes="32x32" />
        <link rel="icon" href="/images/favicon-192.png" sizes="192x192" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Libre+Franklin:wght@300;400;600&display=swap" rel="stylesheet" />      
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App