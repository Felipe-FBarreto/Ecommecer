import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {GlobalStorage} from '../components/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <GlobalStorage>
    <Component {...pageProps} />
  </GlobalStorage>
  )
}

export default MyApp
