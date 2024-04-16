import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from 'next/font/google'
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] })

function App({ Component, pageProps:{session, ...pageProps } }) {

  return (
    <main className={montserrat.className}>
      <Head>
        <title>HKSTP Talent Pool 2024</title>
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  )
}

export default appWithTranslation(App)