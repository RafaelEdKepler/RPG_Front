import type { AppProps } from 'next/app'
import "../styles/map.css";
//@ts-ignore
import { ToastContainer } from 'react-nextjs-toast'
import { MapProvider } from '../hooks/useMap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MapProvider>
        <Component {...pageProps} />;
        <ToastContainer />
      </MapProvider>
    </>
  )
}

export default MyApp
