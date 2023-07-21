import { AppProps } from 'next/app'
import '../styles/globals.scss'
import HydrationZustand from '../Components/HydrationZustand'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HydrationZustand>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </HydrationZustand>
  )
}
export default MyApp
