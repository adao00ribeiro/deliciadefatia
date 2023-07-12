import { AppProps } from 'next/app'
import '../styles/globals.scss'
import HydrationZustand from '../Components/HydrationZustand'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HydrationZustand>
      < Component {...pageProps} />
    </HydrationZustand>
  )
}
export default MyApp
