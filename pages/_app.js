import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

function App({ Component, pageProps:{session, ...pageProps } }) {

  return (
    <main className={montserrat.className}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </main>
  )
}

export default appWithTranslation(App)