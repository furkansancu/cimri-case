import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'

import GlobalStyle from '@/components/globalStyles'
import store from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `:root { --font-inter: ${inter.style.fontFamily}; }`}} />
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}