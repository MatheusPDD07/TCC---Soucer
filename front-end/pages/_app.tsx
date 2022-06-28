import Head from 'next/head'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import { Provider as AuthProvider } from 'next-auth/client'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { ThemeProvider } from 'styled-components'

export const SITE_NAME = 'Studying'

import SEO from '../../next-seo.config'

import { DocProvider } from 'hooks/use-docs'
import { StarProvider } from 'hooks/use-star'
import { TopicProvider } from 'hooks/use-topic'
import { VideoProvider } from 'hooks/use-video'
import { StudentProvider } from 'hooks/use-student'
import { FavoritesProvider } from 'hooks/use-favorites'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <StarProvider>
          <FavoritesProvider>
            <TopicProvider>
              <StudentProvider>
                <DocProvider>
                  <VideoProvider>
                    <Head>
                      <title>Studying</title>
                      <link rel="shortcut icon" href="/img/icon-512.png" />
                      <link rel="apple-touch-icon" href="/img/icon-512.png" />
                      <link rel="manifest" href="/manifest.json" />
                      <meta name="theme-color" content="#214888" />
                      <meta
                        name="description"
                        content="Estude com os melhores e transmita seus conhecimentos."
                      />
                    </Head>
                    <DefaultSeo {...SEO} />
                    <GlobalStyles />
                    <NextNprogress
                      color={theme.colors.secondary}
                      startPosition={0.3}
                      stopDelayMs={200}
                      height={5}
                      showOnShallow={true}
                    />
                    <Component {...pageProps} />
                  </VideoProvider>
                </DocProvider>
              </StudentProvider>
            </TopicProvider>
          </FavoritesProvider>
        </StarProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
